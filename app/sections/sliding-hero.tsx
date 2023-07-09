'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Slider from 'react-slick'

const SlidingHero = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		adaptiveHeight: true,
	}

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
		<section
			className="relative z-[-1] min-h-[90vh] h-full overflow-hidden bg-zicta-blue"
			ref={ref}>
			<Slider {...settings}>
				<img
					src={'/assets/zicta-home.jpg'}
					alt={'ZICTA Home'}
					className="h-full w-full object-cover object-center"
				/>
				<img
					src={'/assets/zicta-strength.jpg'}
					alt={'ZICTA Home'}
					className="h-full w-full object-cover object-center"
				/>
				<img
					src={'/assets/zicta-urge.jpg'}
					alt={'ZICTA Home'}
					className="h-full w-full object-cover object-center"
				/>
			</Slider>
			<div className="bg-black opacity-60 absolute top-0 left-0 right-0 bottom-0 " />
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
				className="absolute left-10 md:left-20 top-[30%] z-10 max-w-4xl text-white space-y-10 ">
				<h1 className=" text-2xl sm:text-4xl md:text-6xl font-medium">
					A Regulator at the Nexus of an Inclusive Digital Economy.
				</h1>
				<p className="text-xs sm:text-xl">
					The vision of the Authority is premised on positioning itself at the
					center of the digital economy in order to respond to new developments.
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
		</section>
	)
}

export default SlidingHero
