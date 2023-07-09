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

const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'Name must be 2 or more characters long' }),
	email: z.string().email({
		message: 'Invalid email address',
	}),
	phoneNumber: z
		.string()
		.min(10, { message: 'Must be 5 or more characters long' }),
	message: z
		.string()
		.min(1, { message: 'Message must be 2 or more characters long' }),
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)

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
			phoneNumber: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true)
		console.log(data)
		setIsLoading(false)
	}

	return (
		<div className="mt-8 sm-mx-auto w-full sm:max-w-4xl ">
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
						name="email"
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