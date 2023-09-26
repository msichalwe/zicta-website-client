'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'

import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
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

const formSchema = z.object({
	email: z.string().email({
		message: 'Invalid email address',
	}),
	password: z.string().min(5, { message: 'Must be 5 or more characters long' }),
})

type LoginFormValues = z.infer<typeof formSchema>

const AuthForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const session = useSession()
	const router = useRouter()

	useEffect(() => {
		if (session?.status === 'authenticated') {
			router.push('/dashboard')
		}
	}, [session?.status])

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true)

		signIn('credentials', {
			...data,
			redirect: true,
		})
			.then((callback) => {
				if (callback?.error) {
					toast.error('Invalid Crendentials')
				}
				if (callback?.ok && !callback?.error) {
					toast.success('Logged in successfully')
				}
			})
			.finally(() => setIsLoading(false))
	}

	const socialAction = (action: string) => {
		setIsLoading(true)
		signIn(action, {
			redirect: true,
		})
			.then((callback) => {
				if (callback?.error) {
					toast.error('Something went wrong!')
				}
				if (callback?.ok && !callback?.error) {
					toast.success('Logged in successfully')
				}
			})
			.catch((err) => console.log(err))
			.finally(() => setIsLoading(false))
	}

	return (
		<div className="mt-8 sm-mx-auto sm:w-full sm:max-w-md">
			<div className="bg-white px-4 py-5 shadow-md sm:rounded sm:px-10">
				<h2 className=" text-3xl md:text-4xl mb-1  md:mb-5 font-medium">
					Welcome Back
				</h2>
				<p className="text-gray-400 text-sm mb-5 md:mb-10">
					'Welcome back! Please enter your details to continue.'
				</p>
				<Form {...form}>
					<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											disabled={isLoading}
											placeholder="***********"
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div>
							<Button className="w-full" disabled={isLoading} type="submit">
								Sign In
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default AuthForm
