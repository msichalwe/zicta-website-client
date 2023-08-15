'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import { motion } from 'framer-motion'

const Header = () => {
	const router = useRouter()

	const backgroundVariants = {
		initial: { scale: 1 },
		zoomedOut: { scale: 1.1 },
	}

	return (
		<div className="h-full w-full ">
			<div className="bg-hero-bg bg-no-repeat, bg-cover h-[70vh] w-full ">
				<div className="w-5/6 mx-auto flex items-center h-full  ">
					<div className="max-w-4xl space-y-6 text-white">
						<h1 className="font-medium text-4xl ">
							<Balancer>
								A Regulator at the Nexus of an Inclusive Digital Economy
							</Balancer>
						</h1>
						<p className=" text-md ">
							<Balancer>
								The vision of the Authority is premised on positioning itself at
								the centre of the digital economy in order to respond to new
								developments.
							</Balancer>
						</p>
						<div className="flex gap-5">
							<Button className="rounded-full bg-zicta-blue">
								Explore ZICTA
							</Button>
							<Button className="rounded-full" variant="ghost">
								Contact Us
							</Button>
						</div>
					</div>
					<div></div>
				</div>
			</div>
			<div className="w-5/6 mx-auto flex space-x-4 py-6 items-center justify-center">
				<p className="text-xl font-semibold">
					Get started with some quick links.
				</p>
				<div className="flex items-center justify-around space-x-4 ml-5">
					{buttonData.map((item, index) => (
						<button
							key={index}
							onClick={() => router.push(`${item.link}`)}
							className="py-1.5 px-4 text-sm text-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-full border border-gray-500 ">
							{item.title}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header

const buttonData = [
	{
		title: 'Toll Free: 7070',
		link: '#',
	},
	{
		title: 'Complaints & Queries',
		link: '/complaints-queries',
	},
	{
		title: 'Procurement',
		link: '/downloads/procurement',
	},
	{
		title: 'ICT Statistics',
		link: '/ict-statistics',
	},
	{
		title: 'FAQs',
		link: '#',
	},
]
