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
import { useToast } from '@/components/ui/use-toast'

import { Combobox } from '@/components/ui/combobox'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
	nominee: z.string().min(1),
	nominee_reason: z.string().max(500).optional(),
	nominee_organization: z.string().optional(),
	nominee_email: z.string().optional(),
	nominee_phone: z.string().optional(),
	awardCategoryId: z.string().min(1),
})

type NominationFormValues = z.infer<typeof formSchema>

interface NominationProps {
	options: {
		label: string
		value: string
		description?: string
		criteria?: string
	}[]
}

const NominationForm: React.FC<NominationProps> = ({ options }) => {
	const router = useRouter()
	const { toast } = useToast()
	const form = useForm<NominationFormValues>({
		resolver: zodResolver(formSchema),
	})

	const { isSubmitting, isValid } = form.formState

	const onSubmit = async (values: NominationFormValues) => {
		try {
			await axios.post('/api/awards/nomination', values)
			toast({
				title: 'Nomination submitted',
				description: 'Your nomination has been submitted successfully.',
				variant: 'success',
			})
			form.reset({
				nominee: '',
				nominee_reason: '',
				nominee_organization: '',
				nominee_email: '',
				nominee_phone: '',
				awardCategoryId: '',
			})
		} catch (error) {
			toast({
				title: 'Oops! An error occurred.',
				description: 'Unable to submit nomination.',
				variant: 'destructive',
			})
		}
	}

	return (
		<>
			<Form {...form}>
				<form
					className="space-y-4 bg-white p-10 rounded shadow"
					onSubmit={form.handleSubmit(onSubmit)}>
					<p className="font-medium text-center">
						You may nominate up to 3 individuals or organizations per category.
						Be sure to make nominations across all categories.
					</p>
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

								{/* show the description of the option selected */}
								{field.value && (
									<FormDescription>
										{
											options.find((option) => option.value === field.value)
												?.description
										}
									</FormDescription>
								)}

								{/* show the criteria of the option selected */}

								{field.value && (
									<>
										<p className="text-xs font-medium text-slate-400 mt-2">
											Eligibility Criteria:
										</p>
										<FormDescription>
											{
												options.find((option) => option.value === field.value)
													?.criteria
											}
										</FormDescription>
									</>
								)}

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
								<FormLabel>Reason</FormLabel>
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

					<h3 className="font-medium text-sm">
						Contact Details of Nominee (If Available) :
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						<FormField
							control={form.control}
							name="nominee_organization"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
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
									<FormLabel>Contact Number</FormLabel>
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
									<FormLabel>Email</FormLabel>
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
