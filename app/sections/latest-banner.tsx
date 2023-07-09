'use client'
import React from 'react'
import { motion } from 'framer-motion'

const LatestBanner = () => {
	const variants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	}

	return (
		<section className="px-6 py-8 lg:py-16 h-full bg-white" id="about">
			<div className="w-5/6 mx-auto">
				<div className="lg:flex lg:items-center lg:-mx-4">
					<motion.div
						className="lg:w-1/2 lg:px-4"
						initial="hidden"
						animate="visible"
						variants={variants}
						whileInView="visible">
						<h2 className="text-3xl font-bold tracking-tight text-zicta-blue sm:text-4xl">
							Latest at ZICTA
						</h2>

						<p className="mt-2 text-sm md:text-lg leading-8 text-gray-600">
							Stay up to date with the latest news, announcements, initiatives,
							and industry developments from the Zambia Information and
							Communications Technology Authority (ZICTA).
						</p>
					</motion.div>

					<motion.div
						className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0"
						initial="hidden"
						animate="visible"
						variants={variants}
						whileInView="visible">
						<motion.img
							className="object-cover w-full rounded-xl min-h-96 h-full shadow-xl"
							src="/assets/zicta-banner.png"
							alt="Latest-banner"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default LatestBanner
