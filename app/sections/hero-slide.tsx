'use client'
import React, { useLayoutEffect, useRef } from 'react'
import HeroSlider, { Nav, Overlay, Slide } from 'hero-slider'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Balancer } from 'react-wrap-balancer'
import { Hero, HeroImage } from '@/types'

type HeroProps = {
	data: Hero
}
const HeroSlide: React.FC<HeroProps> = ({ data }) => {
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
				height={'92vh'}
				autoplay
				animations={{}}
				accessibility={{
					shouldDisplayButtons: false,
				}}
				controller={{
					initialSlide: 1,
					slidingDuration: 500,
					slidingDelay: 100,
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
						className=" max-w-5xl  text-white space-y-5  z-10  flex justify-center items-start  flex-col w-full h-full">
						<h1 className=" text-4xl relative md:text-6xl pl-[50px] md:pl-[100px] font-bold">
							{' '}
							<Balancer>{data?.title} </Balancer>{' '}
							<div className="absolute left-[-20px] top-0 h-full w-[45px] md:w-[75px] bg-[#F8B129]" />
						</h1>
					</motion.div>
					<div className="bg-black opacity-60 absolute z-[-1] top-0 left-0 right-0 bottom-0 " />
				</Overlay>

				{data?.images.map((image: HeroImage) => (
					<Slide
						key={image.id}
						background={{
							backgroundImageSrc: image.url,
						}}
					/>
				))}
				<Nav
					position={{
						bottom: '1.5rem',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				/>
			</HeroSlider>
		</div>
	)
}

export default HeroSlide
