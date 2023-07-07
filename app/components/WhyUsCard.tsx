'use client'
import { motion } from 'framer-motion'

type WhyUsCardProps = {
	title: string
	description: string
}

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
	},
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ title, description }) => {
	return (
		<motion.div
			variants={childVariant}
			className="w-full h-full flex items-center justify-center flex-col py-10 text-center">
			<h3 className="text-2xl font-medium pl-5">{title}</h3>
			<p className="text-gray-400 text-sm p-2">{description}</p>
		</motion.div>
	)
}

export default WhyUsCard
