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
import { Procurement } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import { toast } from 'react-hot-toast'
import { AlertModal } from '@/components/ui/modal/alert-modal'
import { Trash } from 'lucide-react'
import { useAppSelector } from '@/hooks/hooks'
import { selectFileFormat } from '@/state'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import UploadFile from '@/app/dashboard/components/file-upload'

const formSchema = z.object({
	title: z.string().min(1),
	type: z.string().min(1),
	fileUrl: z.string().min(1),
})

type ProcurementFormValues = z.infer<typeof formSchema>

interface ProcurementFormProps {
	initialData: Procurement | null
}

export const ProcurementForm = ({ initialData }: ProcurementFormProps) => {
	const router = useRouter()
	const params = useParams()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const fileFormat = useAppSelector(selectFileFormat)
	console.log(
		'🚀 ~ file: procurement-form.tsx:56 ~ ProcurementForm ~ fileFormat:',
		fileFormat,
	)

	const title = initialData ? `Edit Procurement` : `Create Procurement`
	const description = initialData
		? `Edit a Procurement. `
		: `Add a new Procurement`
	const toastMessage = initialData
		? `Procurement updated.`
		: `Procurement created.`
	const action = initialData ? 'Save changes' : 'Create'

	const defaultValues = initialData
		? { ...initialData }
		: {
				title: '',
				fileUrl: '',
				type: '',
		  }

	const form = useForm<ProcurementFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
		},
	})

	const onSubmit = async (data: ProcurementFormValues) => {
		try {
			setLoading(true)
			if (initialData) {
				await axios.patch(`/api/procurement/${params.procurementId}`, {
					...data,
					fileType: fileFormat,
				})
			} else {
				await axios.post(`/api/procurement`, {
					...data,
					fileType: fileFormat,
				})
			}
			router.refresh()
			router.push(`/dashboard/resources/procurement`)
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
			await axios.delete(`/api/procurement/${params.procurementId}`)
			router.refresh()
			router.push(`/dashboard/resources/procurement}`)
			toast.success('Procurement Deleted')
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
										placeholder="Procurement Title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="type"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Type</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select Procurement Type" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{procurementOptions.map((option) => (
											<SelectItem value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
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

const procurementOptions = [
	{ label: 'Tenders', value: 'tenders' },
	{ label: 'Best Evaluated Bidder', value: 'best_evaluated_bidder' },
	{ label: 'Invitation for Bids', value: 'invitation_for_bids' },
	{ label: 'Request for Clarifications', value: 'request_for_clarifications' },
	{ label: 'General Information', value: 'general_information' },
	{ label: 'Annual Procurement Plan', value: 'annual_procurement_plan' },
]
