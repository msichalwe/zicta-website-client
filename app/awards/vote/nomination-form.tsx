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
	voter_email: z.string().email(),
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
				voter_email: '',
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
				// @ts-ignore
				description: `Unable to submit votes. ${error.response.data}`,
				variant: 'destructive',
			})
			console.log(error)
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
    { value: 'ZTE Zambia Service Limited', label: 'ZTE Zambia Service Limited' },
    { value: 'Tamara Gondwe', label: 'Tamara Gondwe' },
    { value: 'INFRATEL', label: 'INFRATEL' },
    { value: 'Ernest Mafuta', label: 'Ernest Mafuta' },
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' }
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
    { value: 'ZTE Zambia Service Limited', label: 'ZTE Zambia Service Limited' },
    { value: 'VIZTRANIX Information Technology Limited', label: 'VIZTRANIX Information Technology Limited' },
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'Musekiwa Moyo', label: 'Musekiwa Moyo' }
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'Paratus Telecommunications (Pty) Ltd', label: 'Paratus Telecommunications (Pty) Ltd' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'Bayobab Zambia', label: 'Bayobab Zambia' }
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'Camara Education', label: 'Camara Education' }
//need input
	
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'Paratus Telecommunications (Pty) Ltd', label: 'Paratus Telecommunications (Pty) Ltd' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' }
 //need guidance
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'lastonsinkuyu@gmail.com', label: 'lastonsinkuyu@gmail.com' } //???
  //need guidance
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
    { value: 'Gavic Express', label: 'Gavic Express' },
    { value: 'Yafika Express', label: 'Yafika Express' },
    { value: 'ZAMPOST (Zambia Postal Services Corporation)', label: 'ZAMPOST (Zambia Postal Services Corporation)' },
    { value: 'Falcon Express', label: 'Falcon Express' },
    { value: 'One World', label: 'One World' }
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
    { value: 'Eastlight Courier', label: 'Eastlight Courier' },
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Yango', label: 'Yango' },
    { value: 'ZAMPOST (Zambia Postal Services Corporation)', label: 'ZAMPOST (Zambia Postal Services Corporation)' },
    { value: 'DHL', label: 'DHL' }
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'Bayobab Zambia', label: 'Bayobab Zambia' },
    { value: 'Paratus Telecommunications (Pty) Ltd', label: 'Paratus Telecommunications (Pty) Ltd' },
    { value: 'IHS Zambia Limited', label: 'IHS Zambia Limited' }
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Bridging Gap Solutions', label: 'Bridging Gap Solutions' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'MTN Zambia', label: 'MTN Zambia' },
    { value: 'Paratus Telecommunications (Pty) Ltd', label: 'Paratus Telecommunications (Pty) Ltd' }
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
    { value: 'ZAMPOST (Zambia Postal Services Corporation)', label: 'ZAMPOST (Zambia Postal Services Corporation)' },
    { value: 'Ali Kingston Mwila', label: 'Ali Kingston Mwila' },
    { value: 'MTN Zambia', label: 'MTN Zambia' },
    { value: 'One World', label: 'One World' },
    { value: 'Yango', label: 'Yango' }
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'MTN Zambia', label: 'MTN Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'Tiyeni Mobility', label: 'Tiyeni Mobility' }
 // need advice
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Paratus Telecommunications (Pty) Ltd', label: 'Paratus Telecommunications (Pty) Ltd' },
    { value: 'VIZTRANIX Information Technology Limited', label: 'VIZTRANIX Information Technology Limited' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'Bayobab Zambia', label: 'Bayobab Zambia' }
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
    { value: 'ZAMPOST (Zambia Postal Services Corporation)', label: 'ZAMPOST (Zambia Postal Services Corporation)' },
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Yango', label: 'Yango' },
    { value: 'Eastlight Courier', label: 'Eastlight Courier' }
//need guidance
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
    { value: 'Digital Safe Limited', label: 'Digital Safe Limited' },
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'MTN Zambia', label: 'MTN Zambia' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' }
 //need guidance
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'Ali Kingston Mwila', label: 'Ali Kingston Mwila' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'Zamtel (Zambia Telecommunications Company Limited)', label: 'Zamtel (Zambia Telecommunications Company Limited)' },
    { value: 'Liquid Intelligent Technologies', label: 'Liquid Intelligent Technologies' }
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
    { value: 'Airtel Networks Zambia', label: 'Airtel Networks Zambia' },
    { value: 'MTN Zambia Limited', label: 'MTN Zambia Limited' },
    { value: 'Triple Alliance Digital Academy', label: 'Triple Alliance Digital Academy' },
    { value: 'Zambian Cyber Security Initiative Foundation', label: 'Zambian Cyber Security Initiative Foundation' }
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
