'use client'
import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Faq } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { toast } from 'react-hot-toast'
import { Textarea } from '@/components/ui/textarea'
import Editor from '@/components/ui/editor/Editor'
import { Trash } from 'lucide-react'
import { AlertModal } from '@/components/ui/modal/alert-modal'

const formSchema = z.object({
	question: z.string().min(1),
	answer: z.string().min(1),
})

type FaqFormValues = z.infer<typeof formSchema>

interface FaqFormProps {
	initialData: Faq | null
}

export const FaqForm = ({ initialData }: FaqFormProps) => {
	const router = useRouter()
	const params = useParams()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const title = initialData ? `Edit FAQ` : `Create FAQ`
	const description = initialData ? `Edit a FAQ. ` : `Add a new FAQ`
	const toastMessage = initialData ? `FAQ updated.` : `FAQ created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = {
		question: '',
		answer: '',
	}

	const form = useForm<FaqFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: FaqFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/faq/${params.faqId}`, data)
			} else {
				await axios.post(`/api/faq`, data)
			}
			router.refresh()
			router.push(`/dashboard/home-page/faqs`)
			toast.success(toastMessage)
		} catch (error: any) {
			toast.error('Something went wrong.')
		} finally {
			setLoading(false)
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await axios.delete(`/api/faq/${params.faqId}`)
			router.refresh()
			router.push(`/dashboard/home-page/faqs`)
			toast.success('FAQ Deleted')
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
					className="space-y-8 w-full max-w-4xl mx-auto">
					<FormField
						control={form.control}
						name="question"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Question</FormLabel>
								<FormControl>
									<Input disabled={loading} placeholder="Question" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="answer"
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

					<Button disabled={loading} className="ml-auto" type="submit">
						Update
					</Button>
				</form>
			</Form>
		</>
	)
}
