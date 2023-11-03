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
import FileUpload from '@/components/ui/file-upload'
import { LicenceFiles } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { toast } from 'react-hot-toast'
import { AlertModal } from '@/components/ui/modal/alert-modal'
import { Trash } from 'lucide-react'
import { useAppSelector } from '@/hooks/hooks'
import { selectFileFormat } from '@/state'
import UploadFile from '@/app/dashboard/components/file-upload'

const formSchema = z.object({
	title: z.string().min(1),
	fileUrl: z.string().min(1),
})

type ResourceFormValues = z.infer<typeof formSchema>

interface ResourceFormProps {
	initialData: LicenceFiles | null
}

export const ResourceForm = ({ initialData }: ResourceFormProps) => {
	const router = useRouter()
	const params = useParams()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const fileFormat = useAppSelector(selectFileFormat)

	const title = initialData ? `Edit Register` : `Create Register`
	const description = initialData ? `Edit a Register. ` : `Add a new Register`
	const toastMessage = initialData ? `Register updated.` : `Register created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				fileUrl: '',
		  }

	const form = useForm<ResourceFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: ResourceFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(
					`/api/resources/${params.resource}/${params.resourceId}`,
					{ ...data, fileType: fileFormat, type: 'registers' },
				)
			} else {
				await axios.post(`/api/licensing-register`, {
					...data,
					type: 'register',
					fileType: fileFormat,
				})
			}
			router.refresh()
			router.push(`/dashboard/services-page/licensing-registers`)
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
			await axios.delete(
				`/api/resources/${params.resource}/${params.resourceId}`,
			)
			router.refresh()
			router.push(`/dashboard/services-page/licensing-registers`)
			toast.success('LicenceFilesDeleted')
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
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input
										disabled={loading}
										placeholder="Licence Register Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="fileUrl"
						render={({ field }) => (
							<FormItem>
								<FormLabel>File</FormLabel>
								<FormControl>
									{/* <FileUpload
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
						{action}
					</Button>
				</form>
			</Form>
		</>
	)
}
