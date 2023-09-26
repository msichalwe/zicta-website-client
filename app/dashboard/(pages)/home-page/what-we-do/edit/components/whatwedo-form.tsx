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
	description: z.string().min(1),
})

type WhatWeDoFormValues = z.infer<typeof formSchema>

interface WhatWeDoFormProps {
	initialData: BannerSection | null
}

export const WhatWeDoForm = ({ initialData }: WhatWeDoFormProps) => {
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const defaultValues = {
		title: '',
		description: '',
	}

	const form = useForm<WhatWeDoFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: WhatWeDoFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/what-we-do`, data)
			} else {
				await axios.post(`/api/what-we-do`, data)
			}
			router.refresh()
			router.push(`/dashboard/home-page/what-we-do`)
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
					title="Edit What We Do Section"
					description="manage the what We Do section"
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
					<Button disabled={loading} className="ml-auto" type="submit">
						Update
					</Button>
				</form>
			</Form>
		</>
	)
}
