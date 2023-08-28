'use client'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

const ServiceCharter = () => {
	return (
		<div className="flex gap-10 w-full flex-col ">
			<Navbar />
			<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px] flex items-center justify-center">
				<h1 className="sm:text-4xl text-2xl  text-white font-medium">
					<Balancer>Service Charter</Balancer>
				</h1>
				<p className="max-w-6xl mt-5 text-sm md:text-lg text-center text-white">
					<Balancer>
						Your Timelines, Our Commitment. Navigate our service timelines for a
						clear understanding of when to expect efficient service delivery. We
						value your time and are dedicated to upholding these timelines as
						part of our commitment to quality service.
					</Balancer>
				</p>
			</div>
			<div className="mx-auto w-5/6">
				<table className="min-w-full text-sm md:text-base">
					<thead>
						<tr className="bg-gray-200 text-gray-700">
							<th className="py-2 px-4 text-left">SERVICE</th>
							<th className="py-2 px-4 text-left">DURATION WITHIN</th>
						</tr>
					</thead>
					<tbody>
						{serviceItems.map((item, index) => (
							<tr key={index} className="border-t">
								<td className="py-2 px-4">
									{item.isMain ? <strong>{item.title}</strong> : item.title}
								</td>
								<td className="py-2 px-4">
									{item.isMain ? '' : item.duration}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Footer />
		</div>
	)
}

export default ServiceCharter

const serviceItems = [
	{
		title: '1. INFORMATION AND CONSUMER PROTECTION',
		duration: null,
		isMain: true,
	},
	{
		title: '1.1 Provision of Information to Stakeholders',
		duration: '7 Days',
		isMain: false,
	},
	{
		title: '1.2 Complaint Resolution Time Framework',
		duration: '21 Days',
		isMain: false,
	},
	{
		title:
			'1.3 Conduct, complete and reporton Quality of Service complaint resolution',
		duration: '21 Days',
		isMain: false,
	},
	{
		title: '1.4 Report to corresponedence',
		duration: '7 Days',
		isMain: false,
	},
	{
		title: '2. STANDARDS AND TYPE APPROVAL',
		duration: null,
		isMain: true,
	},
	{
		title: '2.1 Issuance of Standard Type Approval Certification',
		duration: '15 Days',
		isMain: false,
	},
	{
		title: '2.2 Type Acceptance Certification',
		duration: '5 Days',
		isMain: false,
	},
	{
		title: '2.3 Issue Dealer Certification',
		duration: '5 Days',
		isMain: false,
	},
	{
		title: '3. SPECTRUM MANAGEMENT',
		duration: null,
		isMain: true,
	},
	{
		title: '3.1 Application processing and issurance of license',
		duration: '10 Days',
		isMain: false,
	},
	{
		title: '3.2 Billing renewal notices',
		duration: '30 Days',
		isMain: false,
	},
	{
		title:
			'3.3 Spectrum License issurance with coordination with neighbouring countries',
		duration: '21 Days',
		isMain: false,
	},
	{
		title: '3.4 Conduct and complete interference resolution',
		duration: '21 Days',
		isMain: false,
	},
	{
		title: '3.5 Conduct and complete interference resolution - international',
		duration: '30 Days',
		isMain: false,
	},
	{
		title: '4. MARKETS, COMPETITION & LICENSING',
		duration: null,
		isMain: true,
	},
	{
		title: '4.1 Issuance and communication of a license',
		duration: '60 Days',
		isMain: false,
	},
	{
		title: '4.2 Process Trariff applications and approve or reject',
		duration: '30 Days',
		isMain: false,
	},
	{
		title: '4.3 Processing of Interconnection Agreements/disputes',
		duration: '60 Days',
		isMain: false,
	},
	{
		title: '5. NAMING AND NUMBERING',
		duration: null,
		isMain: true,
	},
	{
		title: '5.1 Issuance of Number Allocation Certification',
		duration: '5 Days',
		isMain: false,
	},
	{
		title:
			'5.2 Conduct, complete and report on computer Incidences resolution (cyber) Cyber incidents forensics',
		duration: '21 Days',
		isMain: false,
	},
	{
		title: '5.3 Conduct, complete and report on computer forensics',
		duration: '21 Days',
		isMain: false,
	},
	{
		title:
			'5.4 Conduct, complete and report on penetration testing and hardening.',
		duration: '21 Days',
		isMain: false,
	},
]
