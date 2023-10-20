'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Combobox } from '@/components/ui/combobox'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
	proposer_name: z.string().min(1),
	proposer_email: z.string().min(1),
	proposer_organization: z.string().optional(),
	nominee: z.string().min(1),
	nominee_reason: z.string().min(1).max(150),
	nominee_organization: z.string().optional(),
	nominee_email: z.string().min(1),
	nominee_phone: z.string().min(1),
	awardCategoryId: z.string().min(1),
})

type NominationFormValues = z.infer<typeof formSchema>

interface NominationProps {
	options: {
		label: string
		value: string
	}[]
}

const NominationForm: React.FC<NominationProps> = ({ options }) => {
	const router = useRouter()
	const form = useForm<NominationFormValues>({
		resolver: zodResolver(formSchema),
	})

	const { isSubmitting, isValid } = form.formState

	const onSubmit = async (values: NominationFormValues) => {
		try {
			await axios.post('/api/awards/nomination', values)
			toast.success('Successfully Submitted')
			form.reset()
			router.refresh()
		} catch (error) {
			toast.error('Oops.. Something went wrong')
		}
	}

	return (
		<>
			<Form {...form}>
				<form className="py-4 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						<FormField
							control={form.control}
							name="proposer_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Name <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="proposer_email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Email <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="proposer_organization"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Organization</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="awardCategoryId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Category <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Combobox options={...options} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="nominee"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Nominee <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input disabled={isSubmitting} {...field} />
								</FormControl>
								<FormMessage />
								<FormDescription>
									(Name of organization or individual being nominated)
								</FormDescription>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="nominee_reason"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Reason <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Textarea disabled={isSubmitting} {...field} />
								</FormControl>
								<FormMessage />
								<FormDescription>
									(Reasons for nomination – limited to 150 words)
								</FormDescription>
							</FormItem>
						)}
					/>

					<h3 className="font-medium text-sm">Contact Details of Nominee:</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						<FormField
							control={form.control}
							name="nominee_organization"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Name <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
									<FormDescription>
										(Name of organization or individual being nominated)
									</FormDescription>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="nominee_phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Contact Number <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="nominee_email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Email <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit" disabled={!isValid || isSubmitting}>
						Submit
					</Button>
				</form>
			</Form>
		</>
	)
}

export default NominationForm
