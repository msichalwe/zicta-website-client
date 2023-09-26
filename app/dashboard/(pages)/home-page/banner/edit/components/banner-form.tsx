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
import { BannerSection } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { toast } from 'react-hot-toast'

const formSchema = z.object({
	title: z.string().min(1),
	imageUrl: z.string().min(1),
	description: z.string().min(1),
})

type BannerFormValues = z.infer<typeof formSchema>

interface BannerFormProps {
	initialData: BannerSection | null
}

export const BannerForm = ({ initialData }: BannerFormProps) => {
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				imageUrl: '',
				description: '',
		  }

	const form = useForm<BannerFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: BannerFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/banner`, data)
			} else {
				await axios.post(`/api/banner`, data)
			}
			router.refresh()
			router.push(`/dashboard/home-page/banner`)
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
					title="Edit Banner Section"
					description="manage the banner section"
				/>
			</div>
			<Separator />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 w-full max-w-4xl mx-auto">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Banner Title"
										{...field}
									/>
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
								<FormLabel>Subtitle</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Banner Subtitle"
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
					<Button disabled={loading} className="ml-auto" type="submit">
						Update
					</Button>
				</form>
			</Form>
		</>
	)
}
