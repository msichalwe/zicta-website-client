'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Slider from 'react-slick'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useQuery } from '@tanstack/react-query'
import getMediaType from '@/actions/getMediaType'
import Link from 'next/link'
import { format } from 'date-fns'
import { Balancer } from 'react-wrap-balancer'

const MediaSection = () => {
	const ref2 = useRef(null)

	const { data, isLoading } = useQuery({
		queryKey: ['mediaData'],
		queryFn: async () => await getMediaType('news'),
	})
	console.log('🚀 ~ file: media-section.tsx:134 ~ MediaSection ~ data:', data)

	gsap.registerPlugin(ScrollTrigger)
	useLayoutEffect(() => {
		const element = ref2.current

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

	if (isLoading) return <div>Loading...</div>
	return (
		<div className="bg-zicta-blue-light  py-24 sm:py-32 z-[-10]" ref={ref2}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-zicta-blue sm:text-4xl">
						Latest News
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Stay up to date with the latest news and updates from ZICTA.
					</p>
				</div>

				<div className="mx-auto mt-16  gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none  ">
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
							<article
								key={post.id}
								className="flex flex-col items-start justify-between px-10 ">
								<div className="relative w-full">
									<img
										src={post.imageUrl}
										alt=""
										className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
									/>
									<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="max-w-xl">
									<div className="mt-8 flex items-center gap-x-4 text-xs">
										<p className="text-gray-500">
											{format(new Date(post.createdAt), 'MMMM do, yyyy')}
										</p>
										<p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
											{post.category.title}
										</p>
									</div>
									<div className="group relative">
										<h3 className="mt-3 text-lg font-semibold leading-6 line-clamp-2 text-gray-900 group-hover:text-gray-600">
											<Link href={`/media/news/${post.id}`}>
												<span className="absolute inset-0" />
												<Balancer>{post.title}</Balancer>
											</Link>
										</h3>
										<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
											{post.description}
										</p>
									</div>
								</div>
							</article>
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default MediaSection
