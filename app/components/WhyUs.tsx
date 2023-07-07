import React from 'react'
import WhyUsCard from './WhyUsCard'
import { motion } from 'framer-motion'

const whyUsData: Array<WhyUsCard> = [
	{
		title: 'Consumer Protection',
		description:
			'ZICTA is a regulatory body in Zambia empowered to regulate and monitor electronic communication services and products, and handle complaints from consumers regarding ICT services.',
	},
	{
		title: 'Economic Regulation',
		description:
			'The Department of Economic Regulation at ZICTA comprises three units: Markets & Competition, Policy & Research, and Postal. These units are responsible for regulating access.',
	},
	{
		title: 'Consumer Education',
		description:
			'ZICTA Consumer Protection Department develops and implements consumer education programs to raise awareness about consumer rights and responsibilities, promote responsible use of ICT products and services.',
	},
]

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const WhyUs = () => {
	return (
		<div className="mx-auto h-[20vh] flex items-center justify-center w-5/6">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={container}
				className=" h-full  w-full py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 justify-between ">
				{whyUsData.map((data, i) => (
					<WhyUsCard
						key={i}
						title={data.title}
						description={data.description}
					/>
				))}
			</motion.div>
		</div>
	)
}

export default WhyUs
