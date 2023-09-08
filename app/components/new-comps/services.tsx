'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Services = () => {
	const router = useRouter()
	return (
		<div id="services">
			<div className="w-5/6 mx-auto py-10 space-y-4 ">
				<h2 className="font-medium text-3xl uppercase">Services</h2>
				<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-5">
					{servicesData.map((item, index) => (
						<div
							onClick={() =>
								router.push(
									`/services/${item.title
										.toLowerCase()
										.replace(/[\s&]+/g, '-')}`,
								)
							}
							key={index}
							style={{
								backgroundColor: item.color,
							}}
							className={` ${
								item.bgColor ? 'text-white' : 'text-gray-900'
							}  min-h-[20vh] h-full flex justify-center items-start ease-in-out p-5 hover:scale-105 transition cursor-pointer  flex-col`}>
							<h1 className="font-medium uppercase">{item.title}</h1>
							<p className="text-sm">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services

const servicesData = [
	{
		title: 'Licensing',
		description:
			'Obtain official licenses seamlessly. Unlock new opportunities with authorized permissions and regulatory compliance.',
		color: '#313180',
		bgColor: true,
		image: '',
	},
	{
		title: 'Consumer Protection',
		description:
			"Your rights matter. Benefit from ZICTA's dedicated efforts to ensure fair practices, data privacy, and consumer satisfaction.",
		color: '#C6EBBE',
		image: '',
	},
	// {
	// 	title: 'Spectrum Management',
	// 	description:
	// 		'Navigate the digital landscape efficiently. ZICTA manages the spectrum for optimal connectivity and communication services',
	// 	color: '#A9DBB8',
	// 	image: '',
	// },
	// {
	// 	title: 'Universal Access',
	// 	description:
	// 		'Connect everyone, everywhere. ZICTA facilitates inclusive access to digital resources and services.',
	// 	color: '#7CA5B8',
	// 	bgColor: true,
	// },
	// {
	// 	title: 'Cyber Security',
	// 	description:
	// 		"Safeguard your digital presence. ZICTA's cybersecurity initiatives protect against online threats and vulnerabilities.",
	// 	color: '#F7A072',
	// },
	{
		title: 'Economic Regulation',
		description:
			'Foster a balanced industry. ZICTA oversees economic regulations for a competitive and sustainable ICT sector.',
		color: '#7CA5B8',
		bgColor: true,
	},
	{
		title: 'Technical Regulation',
		description:
			'Streamline technology standards. ZICTA ensures adherence to technical norms for seamless interoperability.',
		color: '#C6EBBE',
	},
	{
		title: 'Postal & Courier',
		description:
			'Beyond the digital realm. ZICTA manages postal and courier services, bridging the gap between physical and digital communication..',
		color: '#F7A072',
		bgColor: true,
	},
]
