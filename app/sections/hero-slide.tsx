'use client'
import React, { useLayoutEffect, useRef } from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider'
import { ArrowUpRight } from 'lucide-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const image1 = '/assets/zicta-home.jpg'
const image2 = '/assets/zicta-strength.jpg'
const image3 = '/assets/zicta-urge.jpg'

const HeroSlide = () => {
	const ref = useRef(null)

	gsap.registerPlugin(ScrollTrigger)
	useLayoutEffect(() => {
		const element = ref.current

		ScrollTrigger.create({
			trigger: element,
			start: 'top top',
			end: 'bottom',
			pin: true,
			pinSpacing: false,
			scrub: true,
		})

		return () => {
			ScrollTrigger.killAll()
		}
	}, [])
	return (
		<div className="z-[-1]" ref={ref}>
			<HeroSlider
				height={'100vh'}
				autoplay
				controller={{
					initialSlide: 1,
					slidingDuration: 500,
					slidingDelay: 100,
					onSliding: (nextSlide) =>
						console.debug('onSliding(nextSlide): ', nextSlide),
					onBeforeSliding: (previousSlide, nextSlide) =>
						console.debug(
							'onBeforeSliding(previousSlide, nextSlide): ',
							previousSlide,
							nextSlide,
						),
					onAfterSliding: (nextSlide) =>
						console.debug('onAfterSliding(nextSlide): ', nextSlide),
				}}>
				<Overlay className="relative">
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
						className=" max-w-4xl text-white space-y-5 md:space-y-10 z-10 px-10 flex justify-center items-start md:pl-32 flex-col w-full h-full">
						<h1 className=" text-4xl md:text-6xl font-medium">
							A Regulator at the Nexus of an Inclusive Digital Economy.
						</h1>
						<p className="text-xs sm:text-xl">
							The vision of the Authority is premised on positioning itself at
							the center of the digital economy in order to respond to new
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
							<AnchorLink href="#services">
								<button className="md:px-8 md:py-4 text-sm md:text-md py-2 px-4 border border-1 border-white">
									<div className="flex gap-2  ">
										Learn More <ArrowUpRight className="h-5 w-5 text-white " />
									</div>
								</button>
							</AnchorLink>
						</motion.div>
					</motion.div>
					<div className="bg-black opacity-60 absolute z-[-1] top-0 left-0 right-0 bottom-0 " />
				</Overlay>

				<Slide
					shouldRenderMask
					label="Giau Pass - Italy"
					background={{
						backgroundImageSrc: image1,
					}}
				/>

				<Slide
					shouldRenderMask
					label="Bogliasco - Italy"
					background={{
						backgroundImageSrc: image2,
					}}
				/>

				<Slide
					shouldRenderMask
					label="County Clare - Ireland"
					background={{
						backgroundImageSrc: image3,
					}}
				/>
			</HeroSlider>
		</div>
	)
}

export default HeroSlide
