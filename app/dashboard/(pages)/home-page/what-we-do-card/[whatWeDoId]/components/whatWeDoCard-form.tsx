'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { WhatWeDoCard, Service } from '@prisma/client'

import Parser from 'html-react-parser'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AlertModal } from '@/components/ui/modal/alert-modal'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { Trash } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
	title: z.string().min(1),
	content: z.string().min(1),
})

type WhatWeDoCardFormValues = z.infer<typeof formSchema>

interface WhatWeDoCardFormProps {
	initialData?: WhatWeDoCard | null
}

export const WhatWeDoCardForm: React.FC<WhatWeDoCardFormProps> = ({
	initialData,
}) => {
	const params = useParams()
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const title = initialData ? `Edit Card` : `Create Card`
	const description = initialData ? `Edit a Card. ` : `Add a new Card`
	const toastMessage = initialData ? `Card updated.` : `Card created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				content: '',
		  }

	const form = useForm<WhatWeDoCardFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const onSubmit = async (data: WhatWeDoCardFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/what-we-do-card/${params.whatWeDoId}`, {
					...data,
					whatWeDoId: '64b00b4dbd697822a84fb623',
				})
			} else {
				await axios.post(`/api/what-we-do-card`, {
					...data,
					whatWeDoId: '64b00b4dbd697822a84fb623',
				})
			}
			router.refresh()
			router.push(`/dashboard/home-page/what-we-do-card`)
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
			await axios.delete(`/api/what-we-do-card/${params.whatWeDoId}`)
			router.refresh()
			router.push(`/dashboard/whatWeDoCards`)
			toast.success('WhatWeDoCard Deleted')
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
					className="space-y-8 w-full max-w-6xl mx-auto">
					<div className="md:grid md:grid-cols-1 gap-8">
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
											placeholder="Content"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={loading} className="ml-auto" type="submit">
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}
