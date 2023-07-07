'use client'
import React from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import WhyUs from './WhyUs'

const Hero = () => {
	return (
		<section id="home" className="w-full">
			<div className="h-[80vh] bg-zicta-blue flex items-center  text-white">
				{/* Left section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: {
							opacity: 0,
							x: -50,
						},
						visible: {
							opacity: 1,
							x: 0,
						},
					}}
					className="basis-1/2 h-full flex justify-center gap-5 space-y-5 px-20 flex-col ">
					<h1 className="text-4xl md:text-6xl font-medium">
						A Regulator at the Nexus of an Inclusive Digital Economy.
					</h1>
					<p className="text-xs sm:text-xl">
						{' '}
						The vision of the Authority is premised on positioning itself at the
						center of the digital economy in order to respond to new
						developments.
					</p>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: {
								opacity: 0,
								x: -50,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}>
						<AnchorLink href={'#services'}>
							<button className="px-8 py-4 border border-1 border-white">
								<div className="flex gap-2 ">
									Learn More <ArrowUpRight className="h-5 w-5 text-white " />
								</div>
							</button>
						</AnchorLink>
					</motion.div>
				</motion.div>
				{/*TODO: right section image slider */}
				<div className="basis-1/2 relative h-full">
					<img
						src={'/assets/zicta-home.jpg'}
						className="object-cover absolute h-full w-full object-center"
						alt={'ZICTA Home'}
					/>
				</div>
			</div>
			<div className="h-[40vh] flex items-center justify-center">
				<WhyUs />
			</div>
		</section>
	)
}

export default Hero
