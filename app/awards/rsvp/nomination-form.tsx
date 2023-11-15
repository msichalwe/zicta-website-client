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
	guest_first_name: z.string().min(1),
	guest_last_name: z.string().min(1),
	guest_email: z.string().email(),
	guest_phone: z.string().min(10),
	guest_organization: z.string().min(1),
	guest_position: z.string().min(1),
	guest_dietary_requirements: z.string().min(1),
	attending: z.string().min(1),
})

type NominationFormValues = z.infer<typeof formSchema>

interface NominationProps {}

const NominationForm: React.FC<NominationProps> = () => {
	const router = useRouter()
	const { toast } = useToast()
	const form = useForm<NominationFormValues>({
		resolver: zodResolver(formSchema),
	})

	const { isSubmitting, isValid } = form.formState

	const onSubmit = async (values: NominationFormValues) => {
		try {
			await axios.post('/api/awards/rsvp', values)
			toast({
				title: 'Reservation submitted',
				description: 'Your Reservation has been submitted successfully.',
				variant: 'success',
			})
			form.reset({
				guest_first_name: '',
				guest_last_name: '',
				guest_email: '',
				guest_phone: '',
				guest_organization: '',
				guest_position: '',
				guest_dietary_requirements: '',
				attending: '',
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
					<p className="font-black text-lg text-center text-zicta-blue">
						Get ready to electrify the ZICTA ICT Awards! RSVP now and join us as
						we celebrate the tech world's brightest stars - your presence is the
						key to making this night unforgettable.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<FormField
							control={form.control}
							name="guest_first_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
									{/* <FormDescription>
										(Name of organization or individual being nominated)
									</FormDescription> */}
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="guest_last_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
									{/* <FormDescription>
										(Name of organization or individual being nominated)
									</FormDescription> */}
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<FormField
							control={form.control}
							name="guest_organization"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Organization</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
									{/* <FormDescription>
									(Name of organization for individual being invited)
								</FormDescription> */}
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="guest_position"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Position</FormLabel>
									<FormControl>
										<Input disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
									{/* <FormDescription>
									(Position of individual being invited)
								</FormDescription> */}
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<FormField
							control={form.control}
							name="guest_phone"
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
							name="guest_email"
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
					<div className="grid grid-cols-1 md:grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="guest_dietary_requirements"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Special Dietary Requirements and considerations
									</FormLabel>
									<FormControl>
										<Textarea disabled={isSubmitting} {...field} />
									</FormControl>
									<FormMessage />
									{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
								</FormItem>
							)}
						/>
						</div>
					<div className="grid grid-cols-1 md:grid-cols-1 gap-5 text-center text-zicta-blue">
						<FormField
							control={form.control}
							name="attending"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Are you Attending?
									</FormLabel>
									<FormControl>
									<Combobox 
  options={[
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
 
 //need guidance
  ]}
  {...field} 
/>
									</FormControl>
									<FormMessage />
									{/* <FormDescription>
									(What is the most memorable consistent momment in the ICT and Postal Sector)
								</FormDescription> */}
								</FormItem>
							)}
						/>
					</div>
					{/* <h3 className="font-medium text-sm">
						Contact Details of Nominee (If Available) :
					</h3> */}

					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Button type="submit" disabled={!isValid || isSubmitting}>
							Submit!
						</Button>
					</div>

				</form>
			</Form>
		</>
	)
}

export default NominationForm
