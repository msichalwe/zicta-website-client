'use client'
import * as z from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { SubService, Service } from '@prisma/client'

import Parser from 'html-react-parser'

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
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { Trash } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Editor from '@/components/ui/editor/Editor'

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	content: z.string().min(1),
	serviceId: z.string().min(1),
})

type SubServiceFormValues = z.infer<typeof formSchema>

interface SubServiceFormProps {
	initialData?: SubService | null
	services: Service[]
}

export const SubServiceForm: React.FC<SubServiceFormProps> = ({
	initialData,
	services,
}) => {
	const params = useParams()
	const router = useRouter()

	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const [body, setBody] = useState('' as any)

	const title = initialData ? `Edit Sub Service` : `Create Sub Service`
	const description = initialData
		? `Edit a Sub Service. `
		: `Add a new Sub Service`
	const toastMessage = initialData
		? `Sub Service updated.`
		: `Sub Service created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				description: '',
				content: '',
				serviceId: '',
		  }

	const form = useForm<SubServiceFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const onSubmit = async (data: SubServiceFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.put(`/api/subservice/${params.subserviceId}`, data)
			} else {
				await axios.post(`/api/subservice`, data)
			}
			router.refresh()
			router.push(`/dashboard/subservices`)
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
			await axios.delete(`/api/subservice/${params.subserviceId}`)
			router.refresh()
			router.push(`/dashboard/subservices`)
			toast.success('SubService Deleted')
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
							name="serviceId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Service</FormLabel>
									<Select
										disabled={loading}
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue
													defaultValue={field.value}
													placeholder="Select a service"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{services.map((service) => (
												<SelectItem key={service.id} value={service.id}>
													{service.title}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
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

			{/* @ts-ignore */}
			<div className="body">{Parser(body)}</div>
		</>
	)
}

const options = {}
