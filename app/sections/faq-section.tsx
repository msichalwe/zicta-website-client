'use client'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

const faqs = [
	{
		id: 1,
		question: "What's the best thing about Switzerland?",

		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},

	{
		id: 2,
		question: 'How do you make holy water?',

		answer:
			'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		id: 3,
		question: 'What do you call someone with no body and no nose?',
		answer:
			'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
]
const FaqSection = () => {
	return (
		<div className="bg-white shadow-sm">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
						Frequently asked questions
					</h2>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						<Accordion type="single" collapsible className="w-full">
							{faqs.map((faq) => (
								<AccordionItem value={faq.question}>
									<AccordionTrigger>{faq.question}</AccordionTrigger>
									<AccordionContent>{faq.answer}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</dl>
				</div>
			</div>
		</div>
	)
}

export default FaqSection
