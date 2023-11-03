'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Media, Category } from '@prisma/client'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { AlertModal } from '@/components/ui/modal/alert-modal'
import { cn } from '@/lib/utils'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { Trash } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Editor from '@/components/ui/editor/Editor'
import ImageUpload from '@/components/ui/image-upload'
import UploadFile from '@/app/dashboard/components/file-upload'

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	content: z.string().min(1),
	imageUrl: z.string().min(1),
	categoryId: z.string().min(1),
})

type MediaFormValues = z.infer<typeof formSchema>

interface MediaFormProps {
	initialData?: Media | null
	categories: Category[]
}

export const MediaForm: React.FC<MediaFormProps> = ({
	initialData,
	categories,
}) => {
	const params = useParams()
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const title = initialData
		? `Edit ${params.mediaType}`
		: `Create ${params.mediaType}`
	const description = initialData
		? `Edit a ${params.mediaType}. `
		: `Add a new ${params.mediaType}`
	const toastMessage = initialData
		? `${params.mediaType} updated.`
		: `${params.mediaType} created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				description: '',
				content: '',
				categoryId: '',
				imageUrl: '',
		  }

	const form = useForm<MediaFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const onSubmit = async (data: MediaFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/media/${params.mediaType}/${params.mediaId}`, {
					...data,
					type: params.mediaType,
				})
			} else {
				await axios.post(`/api/media/${params.mediaType}`, {
					...data,
					type: params.mediaType,
				})
			}
			router.refresh()
			router.push(`/dashboard/media/${params.mediaType}`)
			toast.success(toastMessage)
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await axios.delete(`/api/media/${params.mediaType}/${params.mediaId}`)
			router.refresh()
			router.push(`/dashboard/media/${params.mediaType}`)
			toast.success('Media Deleted')
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
			setOpen(false)
		}
	}

	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={onDelete}
				loading={loading}
			/>
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{initialData && (
					<Button
						disabled={loading}
						variant="destructive"
						size="sm"
						onClick={() => setOpen(true)}>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-full">
					<div className="md:grid md:grid-cols-3 gap-8">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input disabled={loading} placeholder="Title" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Input
											disabled={loading}
											placeholder="Description"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="categoryId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<Select
										disabled={loading}
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue
													defaultValue={field.value}
													placeholder="Select a category"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{categories.map((category) => (
												<SelectItem key={category.id} value={category.id}>
													{category.title}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="imageUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>ImageUrl</FormLabel>
									<FormControl>
										{/* <ImageUpload
											value={field.value ? [field.value] : []}
											disabled={loading}
											onChange={(url) => field.onChange(url)}
											onRemove={() => field.onChange('')}
										/> */}
										<UploadFile
											className="p-16 mt-10 border border-neutral-200  rounded"
											value={field.value ? [field.value] : []}
											onChange={(url) => field.onChange(url)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="col-span-3">
							<FormField
								control={form.control}
								name="content"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Content</FormLabel>
										<FormControl>
											<Editor value={field.value} onChange={field.onChange} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<Button disabled={loading} className="ml-auto" type="submit">
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}

const options = {}
