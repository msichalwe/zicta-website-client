'use client'
import Slider from 'react-slick'
import Link from 'next/link'
import { format } from 'date-fns'
import { Balancer } from 'react-wrap-balancer'
import { Media } from '@/types'

interface MediaSectionProps {
	data: Media[]
}

const MediaSection: React.FC<MediaSectionProps> = ({ data }) => {
	return (
		<div className="bg-gray-100  py-24 sm:py-32 z-[-10]">
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
