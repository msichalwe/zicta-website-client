'use client'
import getMediaType from '@/actions/getMediaType'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useParams } from 'next/navigation'
import React from 'react'

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

	return (
		<div className=" w-5/6 mx-auto">
			<div className="bg-peaks bg-no-repeat w-full bg-cover  h-full min-h-[400px] rounded-xl mb-20 flex items-center justify-center">
				<h1 className="text-4xl text-white font-medium">
					{params.mediaType.toUpperCase()}
				</h1>
			</div>
			<div className="mx-auto my-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
			</div>
		</div>
	)
}

export default MediaType
