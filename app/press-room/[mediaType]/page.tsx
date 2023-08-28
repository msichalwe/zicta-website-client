'use client'
import getMediaType from '@/actions/getMediaType'
import Heading from '@/app/components/Heading'
import Navbar from '@/app/components/navbar'
import Loader from '@/components/ui/loader'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useParams } from 'next/navigation'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

interface MediaTypeProps {
	params: {
		mediaType: string
	}
}
const MediaType = () => {
	const params = useParams()

	const { data, isLoading } = useQuery({
		queryKey: ['mediaData'],
		queryFn: async () => await getMediaType(params.mediaType),
	})

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
				<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
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
								{data?.map((post) => (
									<article
										key={post.id}
										className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
										<img
											src={post.imageUrl}
											alt=""
											className="absolute inset-0 -z-10 h-full w-full  object-cover"
										/>
										<div className="absolute inset-0 -z-10 backdrop-blur-sm  bg-gradient-to-t from-gray-900 via-gray-900/40" />
										<div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

										<div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
											<p className="text-gray-100 font-medium px-4 py-2 bg-zicta-blue rounded-full opac">
												{format(new Date(post.createdAt), 'MMMM do, yyyy')}
											</p>
										</div>
										<h3 className="mt-3 text-lg font-semibold leading-6 text-white">
											<a href={`/media/${params.mediaType}/${post.id}`}>
												<span className="absolute inset-0" />
												{post.title}
											</a>
										</h3>
									</article>
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default MediaType
