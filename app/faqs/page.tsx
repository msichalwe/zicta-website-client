'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Faq } from '@/types'
import Navbar from '../components/navbar'
import { Balancer } from 'react-wrap-balancer'
import Footer from '../components/footer'
import HTMLReactParser from 'html-react-parser'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import Loader from '@/components/ui/loader'

export const revalidate = 0

const FAQs = () => {
	const { data: faqs, isLoading } = useSWR('/api/faq', fetcher)

	if (isLoading) {
		return <Loader />
	}

	console.log(faqs)

	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col ">
				<div className="bg-gradient-to-l mt-20 to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>FAQs</Balancer>
					</h1>
				</div>
				<div className="mx-auto w-5/6 px-6 sm:py-32 lg:px-8 ">
					<div className="mx-auto divide-y divide-gray-900/10">
						<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
							Frequently asked questions
						</h2>
						<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
							<Accordion type="single" collapsible className="w-full">
								{faqs?.map((faq: any) => (
									<AccordionItem value={faq.question}>
										<AccordionTrigger>{faq.question}</AccordionTrigger>
										<AccordionContent>
											{faq && faq.answer ? (
												<>
													<div className="content">
														{HTMLReactParser(faq.answer)}
													</div>
												</>
											) : null}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</dl>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default FAQs

// const faqs: Faq[] = [
// 	{
// 		id: '1',
// 		question: 'How do I register my sim card?',
// 		answer:
// 			'You can register your sim card by visiting any of our offices or agents with your NRC and sim card',
// 	},
// 	{
// 		id: '2',
// 		question: 'How do I report a sim card fraud?',
// 		answer:
// 			'You can report a sim card fraud by visiting any of our offices or agents with your NRC and sim card',
// 	},
// 	{
// 		id: '3',
// 		question: 'How do I access online services',
// 		answer:
// 			'You can access online services by visiting our online services section, or by visiting any of our offices',
// 	},
// ]
