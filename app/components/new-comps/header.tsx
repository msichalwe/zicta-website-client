'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
	const router = useRouter()

	return (
		<div className="h-full w-full ">
			<div className="bg-hero-bg bg-no-repeat, bg-cover h-[70vh] w-full ">
				<div className="w-5/6 mx-auto flex items-center h-full  ">
					<div className="max-w-4xl space-y-6 text-white">
						<h1 className="font-medium md:text-4xl text-2xl  ">
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
							<AnchorLink
								href="#services"
								className="rounded-full px-4 py-2 text-xs md:text-sm bg-zicta-blue">
								Explore ZICTA
							</AnchorLink>
							<AnchorLink
								href="#contact"
								className="text-white flex items-center justify-center ">
								Contact Us
							</AnchorLink>
						</div>
					</div>
					<div></div>
				</div>
			</div>

			<div className="w-5/6 mx-auto flex flex-col md:flex-row space-x-4 space-y-6 md:space-y-0 py-6 items-center justify-center">
				<p className="text-xl font-semibold">
					Get started with some quick links.
				</p>
				<div className="grid-cols-2  lg:grid-cols-5 grid gap-2">
					{buttonData.map((item, index) => (
						<button
							key={index}
							onClick={() => router.push(`${item.link}`)}
							className="text-xs  px-1 md:px-4 py-1.5  text-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-full border border-gray-500 ">
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
		title: 'Projects',
		link: `/media/projects`,
	},
	{
		title: 'Complaints & Queries',
		link: '/complaints-queries',
	},
	{
		title: 'Procurement',
		link: '/resources/procurement',
	},
	{
		title: 'ICT Statistics',
		link: '/ict-statistics',
	},
	{
		title: 'FAQs',
		link: '/faqs',
	},
]
