'use client'

import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Lock, CalendarCheck2, LineChart } from 'lucide-react'
import { WhatWeDo, WhatWeDoCard } from '@/types'
import Link from 'next/link'

interface WhatWeDoProps {
	data: WhatWeDo
}
const Hero: React.FC<WhatWeDoProps> = ({ data }) => {
	return (
		<div className="bg-white py-24 sm:py-32" id="what-we-do">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<motion.h2
						className="text-base font-semibold leading-7 text-zicta-blue"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.2 }}>
						What we do
					</motion.h2>
					<motion.p
						className="mt-2 text-3xl font-bold tracking-tight text-zicta-blue sm:text-4xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.4 }}>
						{data.title}
					</motion.p>
					<motion.p
						className="mt-6 text-lg leading-8 text-gray-600"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.6 }}>
						{data.description}
					</motion.p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<motion.dl
						className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.8 }}>
						{data.whatWeDoCard.map((feature: WhatWeDoCard) => (
							<motion.div
								key={feature.title}
								className="flex flex-col"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.5 }}>
								<motion.dt
									className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.2, delay: 0.5 }}>
									{feature.title}
								</motion.dt>
								<motion.dd
									className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.2, delay: 0.5 }}>
									<motion.p className="flex-auto">{feature.content}</motion.p>
									<motion.p className="mt-6">
										<Link
											href={`/services/${feature.title
												.toLowerCase()
												.replace(/ /g, '-')}`}
											className="text-sm font-semibold leading-6 text-zicta-blue">
											Learn more <span aria-hidden="true">→</span>
										</Link>
									</motion.p>
								</motion.dd>
							</motion.div>
						))}
					</motion.dl>
				</div>
			</div>
		</div>
	)
}

export default Hero
