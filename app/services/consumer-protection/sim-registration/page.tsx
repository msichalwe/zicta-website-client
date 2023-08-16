'use client'
import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const SimRegistration = () => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
				<div className="flex px-10 md:px-0 items-start justify-center space-y-2 flex-col">
					<h1 className="text-4xl font-medium">Sim Registration</h1>
					<p className="">
						Following the commencement of Subscriber Identity module (Sim) card
						registration, the Zambia Information and Communications Technology
						Authority is pleased to answer the following questions:
					</p>
				</div>
				<div>
					<img
						src={'/assets/sim-card-registration.jpg'}
						alt="identity-theft-image"
						className="w-full h-full object-cover rounded"
					/>
				</div>
			</div>

			<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
				<Accordion type="single" collapsible className="w-full">
					{faqData?.map((faq) => (
						<AccordionItem value={faq.question}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</dl>
		</div>
	)
}

export default SimRegistration

const faqData = [
	{
		id: 1,
		question: 'What is SIM card registration?',
		answer:
			"SIM card registration is the process of recording and verifying mobile phone number(s) and personal information of a subscriber, by a mobile communications service provider. Such information includes the subscriber's name and date of birth, gender, address (postal and/or physical address), and if available email address. The process involves getting both new and existing mobile phone subscribers to consensually provide their identification details to their network operators.",
	},
	{
		id: 2,
		question: 'Why must we register our numbers?',
		answer:
			'SIM card registration is intended to:\nA) Help create a database to aid Law enforcement agencies identify the mobile phone SIM card owners\nB) Track criminals who use cell phones for illegal activities\nC) Curb other negative incidents such as lose of phone through theft, nuisance/hate text messages, fraud, threats and inciting violence\nD) Help service providers know their customers better',
	},
	{
		id: 3,
		question: 'What information and documentation do I need to register?',
		answer:
			"For Zambian nationals, you will need EITHER of the following in original form:\na. National Registration Card\nb. Valid passport\nc. Valid driver's license\nd. Voters Card\nFor foreigners, EITHER of the following in original form:\na. Valid Passport\nb. Valid Work Permit Identification Card",
	},
	{
		id: 4,
		question: 'Will my information be kept safe?',
		answer:
			'All information will be kept confidential by the respective mobile phone operators in a secure data base. The information collected shall NOT be disclosed to any person unless as required by any written Law',
	},
	{
		id: 5,
		question:
			'Could the information I provide be used for purposes other than what is intended?',
		answer:
			'The information collected shall only be used for the purpose for which the registration exercise is being undertaken and where necessary the information may only be availed to the authorities to the extent permitted by the law.',
	},
	{
		id: 6,
		question:
			'Does information collected during Subscriber Registration suffice for all services provided by a service provider?',
		answer:
			'Not necessarily. Each Service provider will advise on additional information or requirements for subscription to their services/products where necessary.',
	},
	{
		id: 7,
		question: 'Which mobile numbers must be registered?',
		answer:
			'All prepaid and postpaid mobile phone numbers and data SIM cards on all networks must be registered with the respective service provider. These could be individual or corporate.',
	},
	{
		id: 8,
		question: 'Can I register multiple cards?',
		answer:
			'Yes, if you own multiple cards, you can register all with the respective service provider.',
	},
	{
		id: 9,
		question: 'Where do I go to register?',
		answer:
			'Registration will take place at all mobile phone service centres or customer care centers and also at designated registration points as set up by the operators. The mobile phone service providers will provide more information on their respective registration centers.',
	},
	{
		id: 10,
		question: 'How much will it cost me to register?',
		answer: 'SIM card registration is free of charge on all networks.',
	},
	{
		id: 11,
		question: 'How soon must I register?',
		answer:
			'You are advised to register with your service provider at the point of purchasing the SIM card. By failing to register, you are jeopardizing Government efforts at stamping out incidences of crime perpetuated through mobile phone handsets, and by extension putting yourself at risk. It is, therefore, in your interest to register your SIM card (s) that registration is done as soon as possible.',
	},
	{
		id: 12,
		question:
			'What will happen if I have not registered my SIM card by the set deadline?',
		answer:
			'Failure to register is a breach of the law and the service provider shall not provide any communication service to a person who fails or refuses to register. Your SIM card shall be deactivated and you will not be able to make or receive calls.',
	},
	{
		id: 13,
		question: 'How will I be sure that my number is registered?',
		answer:
			'Some mobile Network operators will send messages to registered mobile numbers; others will issue receipts upon registration. To be on the safest side, you may check with your network operator to verify your registration.',
	},
	{
		id: 14,
		question: 'Can someone register for me?',
		answer:
			'In case you cannot do the registration, someone else can register the SIM card in his or her number but the person will be responsible for your number.',
	},
	{
		id: 15,
		question:
			'What will happen to the vendors of SIM cards, will this exercise put them out of business?',
		answer:
			'No. they will continue to sell non-activated SIM cards and anyone who purchases a SIM card from them but will have to register the SIM before it can be used to make or receive calls.',
	},
	{
		id: 16,
		question:
			'How will the socially disadvantaged, physically challenged, elderly and the minors be registered?',
		answer:
			'A) The disadvantaged people will be registered by proxy, as arranged by their mobile operators.\nB) A minor shall need to be accompanied by an adult who has the relevant identification documents to purchase and register as the subscriber/owner of the SIM card. The minor will be registered as the user of SIM cards and once the minor attains the age of 16, the adult under whose name the SIM card is registered, will be at liberty to change the registration to be in the name of the young adult.',
	},
	{
		id: 17,
		question: 'Will Corporate Organizations be allowed to register?',
		answer:
			"Corporate Users will be registered upon presentation of a letter duly signed by recognized authority and written on the Organization's letterhead.",
	},
	{
		id: 18,
		question:
			'What can I do if there is change in information provided at registration?',
		answer:
			'You should inform your service provider of the changes in the information. The service provider may conduct further verification to ascertain the true identity of the subscriber registered.',
	},
	{
		id: 19,
		question:
			"What will happen to a customer's airtime and existing subscription services when they get deactivated for non-compliance to the registration process?",
		answer:
			'Deactivation shall go through the same cycle as an inactive SIM card. It is thus expected that credit will be restored once the customer complies within the window that the SIM card can be reactivated.',
	},
]
