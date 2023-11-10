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
	voter_first_name: z.string().min(1),
	voter_last_name: z.string().min(1),
	voter_email: z.string().email(),
	voter_phone: z.string().min(10),
	the_digital_transformation_champion_award: z.string().min(1),
	the_tech_for_good_trailblazer_award: z.string().min(1),
	the_connected_communities_crusader_award: z.string().min(1),
	the_best_bang_for_your_byte_award: z.string().min(1),
	the_steadfast_stream_award: z.string().min(1),
	the_mobile_marvel_award: z.string().min(1),
	express_delivery_champions_award: z.string().min(1),
	the_captain_of_the_ship_award: z.string().min(1),
	the_pillars_of_the_digital_economy_award: z.string().min(1),
	the_consumer_centric_award_ict: z.string().min(1),
	the_consumer_centric_award_postal_courier: z.string().min(1),
	the_digital_disruptor_award: z.string().min(1),
	the_model_corporate_citizen_award_ict: z.string().min(1),
	the_model_corporate_citizen_award_postal: z.string().min(1),
	the_cyber_sentinel_award: z.string().min(1),
	the_best_digital_economy_coverage_award: z.string().min(1),
	the_digital_literacy_champion_award: z.string().min(1),

})

type NominationFormValues = z.infer<typeof formSchema>

interface NominationProps {

}

const NominationForm: React.FC<NominationProps> = () => {
	const router = useRouter()
	const { toast } = useToast()
	const form = useForm<NominationFormValues>({
		resolver: zodResolver(formSchema),
	})

	const { isSubmitting, isValid } = form.formState

	const onSubmit = async (values: NominationFormValues) => {
		try {
			await axios.post('/api/awards/vote', values)
			toast({
				title: 'Votes submitted Successfully',
				description: 'Your votes has been submitted successfully.',
				variant: 'success',
			})
			form.reset({
				voter_first_name: '',
				voter_last_name: '',
				voter_email: '',
				voter_phone: '',
				the_digital_transformation_champion_award: '',
				the_tech_for_good_trailblazer_award: '',
				the_connected_communities_crusader_award: '',
				the_best_bang_for_your_byte_award: '',
				the_steadfast_stream_award: '',
				the_mobile_marvel_award: '',
				express_delivery_champions_award: '',
				the_captain_of_the_ship_award: '',
				the_pillars_of_the_digital_economy_award: '',
				the_consumer_centric_award_ict: '',
				the_consumer_centric_award_postal_courier: '',
				the_digital_disruptor_award: '',
				the_model_corporate_citizen_award_ict: '',
				the_model_corporate_citizen_award_postal: '',
				the_cyber_sentinel_award: '',
				the_best_digital_economy_coverage_award: '',
				the_digital_literacy_champion_award: '',
				
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
				<div className='flex justify-center items-center'> 
				<form
					className="space-y-4 bg-white p-10 rounded shadow max-w-7xl"
					onSubmit={form.handleSubmit(onSubmit)}>
					<p className="font-medium text-center">

					Get ready to cast your votes and electrify the ZICTA ICT Awards! Vote now and join us as we celebrate the tech world's brightest stars - your votes are the key to making this night unforgettable.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<FormField
							control={form.control}
							name="voter_first_name"
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
							name="voter_last_name"
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
							name="voter_phone"
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
							name="voter_email"
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
					<hr style={{ marginTop: '41px', marginBottom: '41px' }} />
					<p className="font-medium text-center text-zicta-blue">
						Vote for your favorite candidates in each category and help them win the Inaugural ICT & Postal/Courier Sector Awards.
					</p>
					<hr style={{ marginTop: '41px', marginBottom: '41px' }} />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
					<FormField
						control={form.control}
						name="the_digital_transformation_champion_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Digital Transformation Champion Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
						<FormField
						control={form.control}
						name="the_tech_for_good_trailblazer_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Tech for Good Trailblazer Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
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
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_connected_communities_crusader_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Connected Communities Crusader Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
						<FormField
						control={form.control}
						name="the_best_bang_for_your_byte_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Best Bang for Your Byte Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
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
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_steadfast_stream_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Steadfast Stream Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
								<FormField 
						control={form.control}
						name="the_mobile_marvel_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Mobile Marvel Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>	

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="express_delivery_champions_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Express Delivery Champions Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
								<FormField
						control={form.control}
						name="the_captain_of_the_ship_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Captain of the Ship Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>	

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_pillars_of_the_digital_economy_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Pillars of the Digital Economy Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
								<FormField
						control={form.control}
						name="the_consumer_centric_award_ict"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Consumer-centric Award - ICT</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>	

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_consumer_centric_award_postal_courier"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Consumer-centric Award – Postal & Courier</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
								<FormField
						control={form.control}
						name="the_digital_disruptor_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Digital Disruptor Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>	

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_model_corporate_citizen_award_ict"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Model Corporate Citizen Award - ICT</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
								<FormField
						control={form.control}
						name="the_model_corporate_citizen_award_postal"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Model Corporate Citizen Award - Postal</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>	

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_cyber_sentinel_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Cyber Sentinel Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>
								<FormField
						control={form.control}
						name="the_best_digital_economy_coverage_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Best Digital Economy Coverage Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>	

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-24 !mt-10">
					<FormField
						control={form.control}
						name="the_digital_literacy_champion_award"
						render={({ field }) => (
							<FormItem>
								<FormLabel>The Digital Literacy Champion Award</FormLabel>
								<FormControl>
								<Combobox 
  options={[
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' }
  ]}
  {...field} 
/>
								</FormControl>
								<FormMessage />
								{/* <FormDescription>
									(Special dietary requirements of individual being invited)
								</FormDescription> */}
							</FormItem>
						)}
					/>

</div>
					{/* <h3 className="font-medium text-sm">
						Contact Details of Nominee (If Available) :
					</h3> */}
		<div className="flex justify-center">
			<Button type="submit" disabled={!isValid || isSubmitting}>
				Vote!
			</Button>
		</div>
				</form>
				</div>
			</Form>
		</>
	)
}

export default NominationForm
