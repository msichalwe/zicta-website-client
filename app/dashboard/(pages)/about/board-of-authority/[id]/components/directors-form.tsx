'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

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
import { Trash } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import ImageUpload from '@/components/ui/image-upload'
import { Director } from '@prisma/client'
import Heading from '@/app/dashboard/components/Heading'
import FileUpload from '@/components/ui/file-upload'

const formSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	imageUrl: z.string().min(1),
})

type DirectorsFormValues = z.infer<typeof formSchema>

interface DirectorsFormProps {
	initialData?: Director | null
}

const DirectorsForm: React.FC<DirectorsFormProps> = ({ initialData }) => {
	const params = useParams()
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const title = initialData ? `Edit Director` : `Create Director`
	const description = initialData ? `Edit a Director ` : `Add a new Director`
	const toastMessage = initialData ? `Director updated.` : `Director created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				name: '',
				description: '',
				imageUrl: '',
		  }

	const form = useForm<DirectorsFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const onSubmit = async (data: DirectorsFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/about/board-of-authority/${params.id}`, data)
			} else {
				await axios.post('/api/about/board-of-authority', data)
			}
			toast.success(toastMessage)
			router.push('/dashboard/about/board-of-authority')
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await axios.delete(`/api/about/board-of-authority/${params.id}`)
			router.push('/dashboard/about/board-of-authority')
			toast.success('Entry Deleted')
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
					className="space-y-8 w-3/6 "
					onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Full Name"
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
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Description of the director position"
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
									<FileUpload
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
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}

export default DirectorsForm
