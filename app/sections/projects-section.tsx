'use client'

import { Media } from '@/types'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

interface MediaSectionProps {
	data: Media[]
}

const ProjectSection: React.FC<MediaSectionProps> = ({ data }) => {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-zicta-blue sm:text-4xl">
						Latest Projects
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Stay up to date with the latest news and updates from ZICTA.
					</p>
				</div>

				<div className="mx-auto mt-16  gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none   ">
					<Slider
						dots={true}
						arrows={true}
						slidesToShow={3}
						slidesToScroll={1}
						autoplay={true}
						autoplaySpeed={3000}
						infinite={true}
						pauseOnHover={true}
						responsive={[
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 2,
								},
							},
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 1,
									verticalSwiping: true,
									vertical: true,
								},
							},
						]}>
						{data?.map((post) => (
							<div key={post.id} className="px-5">
								<img
									className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
									src={post.imageUrl}
									alt=""
								/>

								<div className="mt-8">
									<span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
										{post.category.title}
									</span>

									<h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
										{post.title}
									</h1>

									<p className="mt-2 text-gray-500 dark:text-gray-400">
										{post.description}
									</p>

									<div className="flex items-center justify-between mt-4">
										<Link
											href={`/media/news/${post.id}`}
											className="inline-block text-blue-500 underline hover:text-blue-400">
											Read more
										</Link>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default ProjectSection
