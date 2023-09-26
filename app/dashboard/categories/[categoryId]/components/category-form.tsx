'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Category } from '@prisma/client'

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
import { cn } from '@/lib/utils'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { Trash } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
})

type CategoryFormValues = z.infer<typeof formSchema>

interface CategoryFormProps {
	initialData: Category | null
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {
	const params = useParams()
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const titleName = initialData ? 'Edit category' : 'Create category'
	const description = initialData ? 'Edit a category.' : 'Add a new category'

	const toastMessage = initialData ? 'Category updated.' : 'Category created.'
	const action = initialData ? 'Save changes' : 'Create'

	const form = useForm<CategoryFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData || {
			title: '',
			description: '',
		},
	})

	const onSubmit = async (data: CategoryFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.put(`/api/categories/${params.categoryId}`, data)
			} else {
				await axios.post(`/api/categories`, data)
			}
			router.refresh()
			router.push('/dashboard/categories')
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
			await axios.delete(`/api/categories/${params.categoryId}`)
			router.refresh()
			router.push('/dashboard/categories')
			toast.success('Category Deleted')
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

			<div className="flex items-center space-y-4 justify-between">
				<Heading title={titleName} description={description} />

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
									<FormLabel>Category Title</FormLabel>
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
									<FormLabel>Category Description</FormLabel>
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
					</div>
					<Button disabled={loading} className="ml-auto" type="submit">
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}
