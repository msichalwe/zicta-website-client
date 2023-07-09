'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ArrowUpRight } from 'lucide-react'

const SectionTemp = () => {
	const [reverse, setReverse] = useState(true)
	const [light, setLight] = useState(true)
	return (
		<div
			className={` md:h-[70vh] h-full w-full     ${
				light ? 'bg-white text-zicta-blue' : 'bg-zicta-blue text-white'
			}  flex flex-col  items-center ${
				reverse ? 'lg:flex-row-reverse ' : 'md:flex-row text-end'
			} bg-zicta blue`}>
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
				className="basis-1/2 min-h-[300px] md:min-h-[600px] h-full flex justify-center gap-10 md:space-y-5 px-10 md:px-20 py-4 md:py-0  items-center flex-col ">
				<div className="max-w-2xl space-y-6 py-5 md:py-0">
					<h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-zicta-blue">
						Child-Online protection is key for ZICTA
					</h1>
					<p className="text-xs sm:text-lg">
						{' '}
						ZICTA is committed to protecting children online and has developed a
						Child Online Protection (COP) program that aims to raise awareness
						on the importance of safe and responsible use of the internet. The
						program provides resources and guidelines for parents, educators,
						and children to promote a safer online environment. ZICTA also
						collaborates with stakeholders to address issues such as
						cyberbullying, child exploitation, and access to inappropriate
						content.
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
							<button
								className={`md:px-8 md:py-4 py-2 px-4 border border-1 ${
									light
										? ' border-zicta-blue   text-zicta-blue'
										: 'border-white text-white'
								}}`}>
								<div className="flex gap-2 ">
									Learn More <ArrowUpRight className="h-5 w-5  " />
								</div>
							</button>
						</AnchorLink>
					</motion.div>
				</div>
			</motion.div>
			<div className={`basis-1/2  w-full h-full `}>
				<img
					src="/assets/kid-tablet.png"
					className="h-full  w-full object-cover object-center"
					alt="banner"
				/>
			</div>
		</div>
	)
}

export default SectionTemp
