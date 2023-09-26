'use client'
import getMediaType from '@/actions/getMediaType'
import Heading from '@/app/components/Heading'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import Loader from '@/components/ui/loader'
import { fetcher } from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import useSWR from 'swr'

interface MediaTypeProps {
	params: {
		mediaType: string
	}
}
const MediaType = () => {
	const params = useParams()

	const { data, isLoading } = useSWR(`/api/media/${params.mediaType}`, fetcher)

	const router = useRouter()
	if (isLoading) {
		return (
			<div className="h-screen w-full flex items-center justify-center">
				<Loader />
			</div>
		)
	}
	return (
		<>
			<Navbar />
			<div>
				<div className="bg-gradient-to-l mt-10 to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl uppercase text-white font-medium">
						<Balancer> {params.mediaType}</Balancer>
					</h1>
				</div>
				<div className=" w-5/6 mx-auto my-10 min-h-screen ">
					<Heading
						title={`Latest ${params.mediaType}`}
						description={`Stay up to date with the latest ${params.mediaType} and updates from ZICTA.`}
					/>
					<div className="mx-auto my-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{data?.length === 0 ? (
							<p className="text-xl font-medium">{`No current ${params.mediaType}. Please check again soon.`}</p>
						) : (
							<>
								{data?.map((post: any) => (
									<article
										key={post.id}
										className="flex flex-col items-start justify-between">
										<img
											src={post.imageUrl}
											alt=""
											onClick={() => router}
											className="aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
										/>

										<div className="max-w-xl">
											<div className="mt-8 flex items-center gap-x-4 text-xs">
												<time
													// @ts-ignore
													dateTime={post.createdAt}
													className="text-gray-500">
													{
														// @ts-ignore

														format(new Date(post.createdAt), 'MMMM do, yyyy')
													}
												</time>
											</div>
											<div className="group relative">
												<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
													<a href={`/media/${params.mediaType}/${post.id}`}>
														<span className="absolute inset-0" />
														{post.title}
													</a>
												</h3>
												<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
													{post.description}
												</p>
											</div>
										</div>
									</article>
								))}
							</>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default MediaType
