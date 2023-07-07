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
			className={`h-screen w-full ${
				light
					? 'bg-zicta-blue-light text-zicta-blue'
					: 'bg-zicta-blue text-white'
			} flex items-center ${
				reverse ? 'flex-row-reverse' : 'flex-row text-end'
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
				className="basis-1/2 min-h-[600px] h-full flex justify-center gap-10 space-y-5 px-20 flex-col ">
				<h1 className="text-4xl md:text-6xl font-medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing
				</h1>
				<p className="text-xs sm:text-xl">
					{' '}
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem ipsum quia dolor sit amet
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
							className={`px-8 py-4 border border-1 ${
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
			</motion.div>
			<div className={`basis-1/2 bg-green-500 w-full h-full `}></div>
		</div>
	)
}

export default SectionTemp
