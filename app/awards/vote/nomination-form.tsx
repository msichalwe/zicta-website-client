'use client'
import { Element, scroller } from 'react-scroll'
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
import { Loader } from 'lucide-react'

const formSchema = z.object({
	voter_email: z.string().email(),
	the_digital_transformation_champion_award: z.string().optional(),
	the_tech_for_good_trailblazer_award: z.string().optional(),
	the_connected_communities_crusader_award: z.string().optional(),
	the_best_bang_for_your_byte_award: z.string().optional(),
	the_steadfast_stream_award: z.string().optional(),
	the_mobile_marvel_award: z.string().optional(),
	express_delivery_champions_award: z.string().optional(),
	the_captain_of_the_ship_award: z.string().optional(),
	the_pillars_of_the_digital_economy_award: z.string().optional(),
	the_consumer_centric_award_ict: z.string().optional(),
	the_consumer_centric_award_postal_courier: z.string().optional(),
	the_digital_disruptor_award: z.string().optional(),
	the_model_corporate_citizen_award_ict: z.string().optional(),
	the_model_corporate_citizen_award_postal: z.string().optional(),
	the_cyber_sentinel_award: z.string().optional(),
	the_best_digital_economy_coverage_award: z.string().optional(),
	the_digital_literacy_champion_award: z.string().optional(),
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
		if (!values.voter_email) {
			document
				.getElementById('voter_email')
				?.scrollIntoView({ behavior: 'smooth' })
			return
		}

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
				<div className="flex justify-center items-center">
					<form
						className="space-y-4 bg-white p-10 rounded shadow max-w-7xl"
						onSubmit={form.handleSubmit(onSubmit)}>
						<p className="font-medium text-center mb-8">
							Get ready to cast your votes and electrify the ZICTA ICT, Postal
							and Courier Sector Awards! Vote now and join us as we celebrate
							the tech world's brightest stars - your votes are the key to
							making this night unforgettable.
						</p>
						<p className="font-medium text-center mb-16 text-zicta-yellow">
							Voting is open from 16th November 2023 to 29th November 2023 at
							17:00 hours
						</p>
						<div className="mt-16">
							<p className="font-medium text-center text-zicta-blue">
								Vote for your favorite candidates in each category and help them
								win the Inaugural ICT, Postal and Courier Sector Awards.
							</p>
						</div>

						<div
							id="voter_email"
							className="grid grid-cols-1 md:grid-cols-1 gap-5">
							<FormField
								control={form.control}
								name="voter_email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Email <span className="text-red-500 ml-2">*</span>
										</FormLabel>
										<FormControl>
											<Input disabled={isSubmitting} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<hr style={{ marginTop: '41px', marginBottom: '41px' }} />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
							<FormField
								control={form.control}
								name="the_digital_transformation_champion_award"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											The Digital Transformation Champion Award
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{
														value: 'ZTE Zambia Service Limited',
														label: 'ZTE Zambia Service Limited',
													},
													{ value: 'Huawei', label: 'Huawei' },
													{
														value: 'NAPSA (National Pension Scheme Authority)',
														label: 'NAPSA (National Pension Scheme Authority)',
													},
													{
														value: 'ZRA (Zambia Revenue Authority)',
														label: 'ZRA (Zambia Revenue Authority)',
													},
													{
														value: 'SMART Zambia Institute',
														label: 'SMART Zambia Institute',
													},
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
													{
														value:
															'Zamtel (Zambia Telecommunications Company Limited)',
														label:
															'Zamtel (Zambia Telecommunications Company Limited)',
													},
													{ value: 'BongoHive', label: 'BongoHive' },
													{ value: 'AgriPredict', label: 'AgriPredict' },
													{ value: 'eMsika', label: 'eMsika' },
													{ value: 'Dawa Health', label: 'Dawa Health' },
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
										<FormLabel>
											The Connected Communities Crusader Award
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{
														value: 'Airtel Networks Zambia',
														label: 'Airtel Networks Zambia',
													},
													{
														value:
															'Zamtel (Zambia Telecommunications Company Limited)',
														label:
															'Zamtel (Zambia Telecommunications Company Limited)',
													},
													{ value: 'ZAMREN', label: 'ZAMREN' },
													{ value: 'Mwabu', label: 'Mwabu' },
													{
														value: 'Camara Education',
														label: 'Camara Education',
													},
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
													{
														value: 'Airtel Networks Zambia',
														label: 'Airtel Networks Zambia',
													},
													{
														value:
															'Zamtel (Zambia Telecommunications Company Limited)',
														label:
															'Zamtel (Zambia Telecommunications Company Limited)',
													},
													{
														value: 'MTN Zambia Limited',
														label: 'MTN Zambia Limited',
													},
													{
														value: 'Liquid Telecom Zambia',
														label: 'Liquid Telecom Zambia',
													},
													{
														value: 'Fibercom Limited',
														label: 'Fibercom Limited',
													},
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
													{
														value: 'Liquid Telecom Limited',
														label: 'Liquid Telecom Limited',
													},
													{
														value: 'Inq. Digital Zambia',
														label: 'Inq. Digital Zambia',
													},
													{
														value: 'Paratus Telecommunications (Pty) Ltd',
														label: 'Paratus Telecommunications (Pty) Ltd',
													},
													{
														value: 'Fibercom Limited',
														label: 'Fibercom Limited',
													},
													{
														value: 'Airlink Broadband Limited',
														label: 'Airlink Broadband Limited',
													},

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
													{
														value: 'Airtel Networks Zambia',
														label: 'Airtel Networks Zambia',
													},
													{
														value:
															'Zamtel (Zambia Telecommunications Company Limited)',
														label:
															'Zamtel (Zambia Telecommunications Company Limited)',
													},
													{
														value: 'MTN Zambia Limited',
														label: 'MTN Zambia Limited',
													},
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
													{
														value:
															'ZAMPOST (Zambia Postal Services Corporation)',
														label:
															'ZAMPOST (Zambia Postal Services Corporation)',
													},
													{ value: 'Falcon Express', label: 'Falcon Express' },
													{
														value: 'One World Freight and Logistics',
														label: 'One World Freight and Logistics',
													},
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
													{
														value: 'Eastlight Logistics Zambia Limited',
														label: 'Eastlight Logistics Zambia Limited',
													},
													{
														value: 'Icypeed Logistics',
														label: 'Icypeed Logistics',
													},
													{ value: 'FedEx', label: 'FedEx' },
													{
														value:
															'ZAMPOST (Zambia Postal Services Corporation)',
														label:
															'ZAMPOST (Zambia Postal Services Corporation)',
													},
													{ value: 'DHL', label: 'DHL' },
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
										<FormLabel>
											The Pillars of the Digital Economy Award
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{ value: 'INFRATEL', label: 'INFRATEL' },
													{
														value: 'Fibercom Limited',
														label: 'Fibercom Limited',
													},
													{ value: 'NetOne', label: 'NetOne' },
													{
														value: 'Paratus Telecommunications (Pty) Ltd',
														label: 'Paratus Telecommunications (Pty) Ltd',
													},
													{
														value: 'IHS Zambia Limited',
														label: 'IHS Zambia Limited',
													},
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
													{
														value: 'Airtel Networks Zambia',
														label: 'Airtel Networks Zambia',
													},
													{
														value: 'Liquid Telecom Limited ',
														label: 'Liquid Telecom Limited',
													},
													{
														value:
															'Zamtel (Zambia Telecommunications Company Limited)',
														label:
															'Zamtel (Zambia Telecommunications Company Limited)',
													},
													{ value: 'MTN Zambia', label: 'MTN Zambia' },
													{
														value: 'Paratus Telecommunications (Pty) Ltd',
														label: 'Paratus Telecommunications (Pty) Ltd',
													},
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
										<FormLabel>
											The Consumer-centric Award – Postal & Courier
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{
														value:
															'ZAMPOST (Zambia Postal Services Corporation)',
														label:
															'ZAMPOST (Zambia Postal Services Corporation)',
													},
													{
														value: 'Mercury Express Logistics',
														label: 'Mercury Express Logistics',
													},
													{
														value: 'Power Tools Logistics',
														label: 'Power Tools Logistics',
													},
													{
														value: 'One World Freight and Logistics',
														label: 'One World Freight and Logistics',
													},
													{ value: 'DHL', label: 'DHL' },
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
													{
														value: 'Airtel Mobile Money',
														label: 'Airtel Mobile Money',
													},
													{
														value: 'MTN Mobile Money',
														label: 'MTN Mobile Money',
													},
													{
														value: 'Zamtel Mobile Money',
														label: 'Zamtel Mobile Money',
													},
													{
														value: 'Tiyeni Mobility',
														label: 'Tiyeni Mobility',
													},
													{ value: 'AfriDelivery', label: 'AfriDelivery' },

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
										<FormLabel>
											The Model Corporate Citizen Award - ICT
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{
														value: 'Airtel Networks Zambia',
														label: 'Airtel Networks Zambia',
													},
													{
														value: 'Paratus Telecommunications (Pty) Ltd',
														label: 'Paratus Telecommunications (Pty) Ltd',
													},
													{
														value: 'Liquid Telecom Limited',
														label: 'Liquid Telecom Limited',
													},
													{
														value:
															'Zamtel (Zambia Telecommunications Company Limited)',
														label:
															'Zamtel (Zambia Telecommunications Company Limited)',
													},
													{ value: 'Bayobab Zambia', label: 'Bayobab Zambia' },
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
										<FormLabel>
											The Model Corporate Citizen Award - Postal
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{
														value:
															'ZAMPOST (Zambia Postal Services Corporation)',
														label:
															'ZAMPOST (Zambia Postal Services Corporation)',
													},
													{
														value: 'Road Shopper Logistics',
														label: 'Road Shopper Logistics',
													},
													{ value: 'DHL', label: 'DHL' },
													{
														value: 'Eastlight Courier',
														label: 'Eastlight Courier',
													},
													{
														value: 'AmeZam Shipping Zambia',
														label: 'AmeZam Shipping Zambia',
													},
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
													{
														value: 'Digital Safe Limited',
														label: 'Digital Safe Limited',
													},
													{
														value: 'Copperbelt Energy Corporation',
														label: 'Copperbelt Energy Corporation',
													},
													{
														value: 'Standard Chartered Bank',
														label: 'Standard Chartered Bank',
													},
													{
														value: 'Liquid Telecom Limited',
														label: 'Liquid Telecom Limited',
													},
													{ value: 'INFRATEL', label: 'INFRATEL' },

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
										<FormLabel>
											The Best Digital Economy Coverage Award
										</FormLabel>
										<FormControl>
											<Combobox
												options={[
													{
														value: 'Diamond TV Zambia',
														label: 'Diamond TV Zambia',
													},
													{
														value: 'Zambia Business Times',
														label: 'Zambia Business Times',
													},
													{
														value: 'Tech Trends Zambia',
														label: 'Tech Trends Zambia',
													},
													{
														value:
															'ZNBC (Zambia National Broadcasting Corporation)',
														label:
															'ZNBC (Zambia National Broadcasting Corporation)',
													},
													{
														value: 'Zambia Daily mail',
														label: 'Zambia Daily mail',
													},
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
													{
														value: 'Asikana Network',
														label: 'Asikana Network',
													},
													{
														value: 'MTN Zambia Limited',
														label: 'MTN Zambia Limited',
													},
													{
														value: 'Triple A Digital Academy',
														label: 'Triple A Digital Academy',
													},
													{
														value:
															'Zambian Cyber Security Initiative Foundation',
														label:
															'Zambian Cyber Security Initiative Foundation',
													},
													{ value: 'Jacaranda Hub', label: 'Jacaranda Hub' },
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
						<div className="flex justify-center cursor-pointer">
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting ? (
									<Loader className="animate-spin text-white h-4 w-4" />
								) : (
									'Vote!'
								)}
							</Button>
						</div>
					</form>
				</div>
			</Form>
		</>
	)
}

export default NominationForm
