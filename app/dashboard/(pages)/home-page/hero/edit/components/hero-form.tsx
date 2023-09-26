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
import { HeroSection, HeroSectionImage } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { toast } from 'react-hot-toast'

const formSchema = z.object({
	title: z.string().min(1),
	images: z.object({ url: z.string() }).array(),
	content: z.string().min(1),
	buttonText: z.string().min(1),
})

type HeroFormValues = z.infer<typeof formSchema>

interface HeroFormProps {
	initialData:
		| (HeroSection & {
				images: HeroSectionImage[]
		  })
		| null
}

export const HeroForm = ({ initialData }: HeroFormProps) => {
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				images: [],
				content: '',
				buttonText: '',
		  }

	const form = useForm<HeroFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: HeroFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/hero`, data)
			} else {
				await axios.post(`/api/hero`, data)
			}
			router.refresh()
			router.push(`/dashboard/home-page/hero`)
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
					title="Edit Hero Section"
					description="manage the hero section"
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
										placeholder="Hero Title"
										{...field}
									/>
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
								<FormLabel>Subtitle</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Hero Subtitle"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="buttonText"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Button Text</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Text of the button"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="images"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Images</FormLabel>
								<FormControl>
									<ImageUpload
										value={field.value.map((image) => image.url)}
										disabled={loading}
										onChange={(url) =>
											field.onChange([...field.value, { url }])
										}
										onRemove={(url) =>
											field.onChange([
												...field.value.filter((current) => current.url !== url),
											])
										}
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
