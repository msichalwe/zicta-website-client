'use client'
import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ImageUpload from '@/components/ui/image-upload'
import { Testimonial } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { toast } from 'react-hot-toast'
import { Textarea } from '@/components/ui/textarea'
import UploadFile from '@/app/dashboard/components/file-upload'

const formSchema = z.object({
	title: z.string().min(1),
	name: z.string().min(1),
	imageUrl: z.string().min(1),
	content: z.string().min(1),
})

type TestimonialFormValues = z.infer<typeof formSchema>

interface TestimonialFormProps {
	initialData: Testimonial | null
}

export const TestimonialForm = ({ initialData }: TestimonialFormProps) => {
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const defaultValues = {
		title: '',
		name: '',
		imageUrl: '',
		content: '',
	}

	const form = useForm<TestimonialFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: TestimonialFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/testimonial`, data)
			} else {
				await axios.post(`/api/testimonial`, data)
			}
			router.refresh()
			router.push(`/dashboard/home-page/testimonial`)
			toast.success('Edit Successful')
		} catch (error: any) {
			toast.error('Something went wrong.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title="Edit Testimonial Section"
					description="manage the testimonial section"
				/>
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-full max-w-4xl mx-auto">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input disabled={loading} placeholder="Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

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
						name="content"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Content</FormLabel>
								<FormControl>
									<Textarea
										disabled={loading}
										placeholder="Testimonial Content"
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
					<Button disabled={loading} className="ml-auto" type="submit">
						Update
					</Button>
				</form>
			</Form>
		</>
	)
}
