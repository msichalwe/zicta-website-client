'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Faq } from '@/types'
import HTMLReactParser from 'html-react-parser'
import React from 'react'

interface FaqSectionPorps {
	data: Faq[]
}

const FaqSection: React.FC<FaqSectionPorps> = ({ data: faqs }) => {
	return (
		<div className="bg-white shadow-sm">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
						Frequently asked questions
					</h2>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						<Accordion type="single" collapsible className="w-full">
							{faqs?.map((faq) => (
								<AccordionItem value={faq.question}>
									<AccordionTrigger>{faq.question}</AccordionTrigger>
									<AccordionContent>
										{faq && faq.answer ? HTMLReactParser(faq.answer) : null}
									</AccordionContent>
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
