'use client'
import React from 'react'
import { motion } from 'framer-motion'

const PartnersSection = () => {
	const logos = [
		{
			src: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
			alt: 'Transistor',
		},
		{
			src: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
			alt: 'Reform',
		},
		{
			src: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
			alt: 'Tuple',
		},
		{
			src: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
			alt: 'SavvyCal',
		},
		{
			src: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
			alt: 'Statamic',
		},
	]

	const variants = {
		hidden: { opacity: 0, y: 50 },
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
		<div className="relative isolate -z-10 mt-32 sm:mt-48 space-y-4 min-h-[40vh]">
			<div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
				<svg
					className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
					aria-hidden="true">
					<defs>
						<pattern
							id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
							width={200}
							height={200}
							x="50%"
							y="50%"
							patternUnits="userSpaceOnUse"
							patternTransform="translate(-100 0)">
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y="50%" className="overflow-visible fill-gray-50">
						<path
							d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect
						width="100%"
						height="100%"
						strokeWidth={0}
						fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
					/>
				</svg>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-5xl text-center">
					<motion.h2
						className="text-3xl font-bold tracking-tight text-zicta-blue sm:text-4xl"
						initial="hidden"
						animate="visible"
						variants={variants}
						whileInView="visible">
						Our Partners
					</motion.h2>
					<motion.p
						className="mt-2 text-sm md:text-lg leading-8 text-gray-600"
						initial="hidden"
						animate="visible"
						variants={variants}
						whileInView="visible">
						ZICTA works with partners such as the telecommunications industry,
						the government of Zambia, international organizations, and
						development partners to achieve its goals of promoting the growth of
						the ICT sector, protecting consumers, and ensuring that ICT services
						are accessible to all Zambians.
					</motion.p>
				</div>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{logos.map((logo, index) => (
						<motion.img
							key={index}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src={logo.src}
							alt={logo.alt}
							width={158}
							height={48}
							initial="hidden"
							animate="visible"
							variants={variants}
							whileInView="visible"
							transition={{ delay: index * 0.5 }}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default PartnersSection
