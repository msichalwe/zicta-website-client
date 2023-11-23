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
	SelectGroup,
	SelectItem,
	SelectLabel,
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
	province: z.string().optional(),
	district: z.string().optional(),
	age: z.string().optional(),
	area: z.string().optional(),
	gender: z.string().optional(),
	operator: z.string().optional(),
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
			province: '',
			district: '',
			gender: '',
			age: '',
			area: '',
			operator: '',
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
					<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
							name="phone"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input
											disabled={isLoading}
											placeholder="Phone Number"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						name="operator"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mobile Operator</FormLabel>
								<FormControl>
									<Input
										disabled={isLoading}
										placeholder="Your Mobile Operator"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid gap-2 grid-cols-1 md:grid-cols-2">
						<FormField
							control={form.control}
							name="province"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Province</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select Province" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Provinces</SelectLabel>
												{Object.keys(provinceToDistricts).map((province) => (
													<SelectItem value={province}>{province}</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="district"
							render={({ field }) => (
								<FormItem>
									<FormLabel>District</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select District" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Districts</SelectLabel>
												{/* @ts-ignore */}
												{provinceToDistricts[form.watch('province')]?.map(
													(district: any) => (
														<SelectItem value={district}>{district}</SelectItem>
													),
												)}
											</SelectGroup>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
						<FormField
							name="area"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Location</FormLabel>
									<FormControl>
										<Input
											disabled={isLoading}
											placeholder="Your location"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name="age"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Age</FormLabel>
									<FormControl>
										<Input
											disabled={isLoading}
											placeholder="Your age"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name="gender"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Gender</FormLabel>
									<Select
										disabled={isLoading}
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select Gender" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="male">Male</SelectItem>
											<SelectItem value="female">Female</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
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

const provinceToDistricts = {
	Central: [
		'Chibombo',
		'Kabwe',
		'Kapiri Mposhi',
		'Mumbwa',
		'Serenje',
		'ITEZHI-TEZHI',
		'LUANO',
		'NGABWE',
		'SHIBUYUNJI',
		'CHISAMBA',
		'CHITAMBO',
		'MKUSHI',
	],
	Copperbelt: [
		'Chililabombwe',
		'Chingola',
		'Kitwe',
		'Luanshya',
		'Ndola',
		'Mufurila',
		'Mpongwe',
		'Kalulushi',
		'Masaiti',
		'Lufwanyama',
	],
	Eastern: [
		'Chipata',
		'Katete',
		'Petauke',
		'Sinda',
		'Chadiza',
		'Chipangali',
		'Kasenengwa',
		'Lumezi',
		'Lundazi',
		'Lusangazi',
		'Mambwe',
		'Nyimba',
		'Vubwi',
	],
	Luapula: [
		'CHIENGE',
		'CHEMBE',
		'CHIFUNABULI',
		'CHIPILI',
		'KAWAMBWA',
		'LUNGA',
		'MANSA',
		'MILENGE',
		'MWANSABOMBWE',
		'MWENSE',
		'NCHELENGE',
		'Nchelenge',
		'SAMFYA',
	],
	Lusaka: [
		'CHILANGA',
		'CHIRUNDU',
		'CHONGWE',
		'KAFUE',
		'LUSAKA',
		'LUANGWA',
		'RUFUNSA',
		'SHIBUYUNJI',
	],
	Muchinga: [
		'CHAMA',
		'CHINSALI',
		'ISOKA',
		'KANCHIBIYA',
		'LAVUSHIMANDA',
		'MAFINGA',
		'MPIKA',
		'NAKONDE',
		'SHIWANGANDU',
	],
	Northern: [
		'CHILUBI',
		'KAPUTA',
		'KASAMA',
		'LUNTE',
		'LUPOSOSHI',
		'LUWINGU',
		'MBALA',
		'MPOROKOSO',
		'MPULUNGU',
		'MUNGWI',
		'NSAMA',
		'SENGA',
	],
	'North-Western': [
		'CHAVUMA',
		'IKELENGE',
		'KABOMPO',
		'KALUMBILA',
		'KASEMPA',
		'MANYINGA',
		'MUFUMBWE',
		'MUSHINDAMO',
		'MWINILUNGA',
		'SOLWEZI',
		'ZAMBEZI',
	],
	Southern: [
		'CHIKANKATA',
		'CHOMA',
		'GWEMBE',
		'KALOMO',
		'KAZUNGULA',
		'LIVINGSTONE',
		'MAZABUKA',
		'MONZE',
		'NAMWALA',
		'PEMBA',
		'SIAVONGA',
		'SINAZONGWE',
		'ZIMBA',
	],
	Western: [
		'KAOMA',
		'KALABO',
		'LIMULUNGA',
		'LUAMPA',
		'LUKULU',
		'MONGU',
		'MULOBEZI',
		'MWANDI',
		'NALOLO',
		'NKEYEMA',
		'SEKONGKONG',
		'SELEMI',
		'SENGA HILL',
		'SESHEKE',
		'SHANGOMBO',
		'SIKONGO',
		'SIOMA',
	],
}
