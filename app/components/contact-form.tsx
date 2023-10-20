'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Name must be 2 or more characters long' }),
	email: z.string().email({
		message: 'Invalid email address',
	}),
	subject: z
		.string()
		.min(1, { message: 'Subject must be 2 or more characters long' }),
	phone: z.string().min(10, { message: 'Must be 5 or more characters long' }),
	message: z
		.string()
		.min(1, { message: 'Message must be 2 or more characters long' }),
	other: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const subjectTypes = [
	{
		label: 'Cyber Harassment',
		value: 'cyber-harassment',
	},
	{
		label: 'Content Related',
		value: 'content-related',
	},
	{
		label: 'Fraud',
		value: 'fraud',
	},
	{
		label: 'Instrusion',
		value: 'instrusion',
	},
	{
		label: 'Malicious Codes',
		value: 'malicious-codes',
	},
	{
		label: 'Other',
		value: 'other',
	},
]

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()

	// const [isMounted, setIsMounted] = useState(false)

	// useEffect(() => {
	// 	setIsMounted(true)
	// }, [])

	// if (!isMounted) {
	// 	return null
	// }

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			phone: '',
			subject: '',
			other: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			setIsLoading(true)
			await axios.post(`/api/complaints-queries`, data)
			router.refresh()
			toast.success('Your Message has been submitted successfully')
			form.reset()
		} catch (error) {
			toast.error('Something went wrong, please try again')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="h-full sm-mx-auto w-full sm:max-w-4xl ">
			<Form {...form}>
				<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder="Full Name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder="Email Address"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="subject"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject</FormLabel>
								<Select
									disabled={isLoading}
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select Subject" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{subjectTypes.map((subject) => (
											<SelectItem key={subject.value} value={subject.value}>
												{subject.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{form.watch('subject') === 'other' && (
						<FormField
							name="other"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Other</FormLabel>
									<FormControl>
										<Input
											disabled={isLoading}
											placeholder="Describe your issue"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}
					<FormField
						name="phone"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder="+260XXXXXXXXX"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="message"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										disabled={isLoading}
										placeholder="Your Message"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div>
						<Button disabled={isLoading} type="submit">
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
