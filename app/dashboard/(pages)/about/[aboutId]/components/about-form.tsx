'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { About } from '@prisma/client'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Editor from '@/components/ui/editor/Editor'
import ImageUpload from '@/components/ui/image-upload'

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	content: z.string().min(1),
	imageUrl: z.string().min(1).nullable(),
})

type AboutFormValues = z.infer<typeof formSchema>

interface AboutFormProps {
	initialData?: About | null
}

export const AboutForm: React.FC<AboutFormProps> = ({ initialData }) => {
	const params = useParams()
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const title = initialData ? `Edit ` : `Create `
	const description = initialData ? `Edit. ` : `Add a new about page`
	const toastMessage = initialData
		? `About Page updated.`
		: `About Page created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				description: '',
				content: '',
				imageUrl: '',
		  }

	const form = useForm<AboutFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const onSubmit = async (data: AboutFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.put(`/api/about/${params.aboutId}`, data)
			} else {
				await axios.post(`/api/about`, data)
			}
			router.refresh()
			router.push(`/dashboard/about`)
			toast.success(toastMessage)
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
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
							name="imageUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>ImageUrl</FormLabel>
									<FormControl>
										<ImageUpload
											value={field.value ? [field.value] : []}
											disabled={loading}
											onChange={(url) => field.onChange(url)}
											onRemove={() => field.onChange('')}
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
