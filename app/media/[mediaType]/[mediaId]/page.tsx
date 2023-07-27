'use client'
import getMedia from '@/actions/getMedia'
import Footer from '@/app/components/footer'
import SideMenu from '@/app/components/side-menu'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import Parser from 'html-react-parser'

interface MediaPostProps {
	params: {
		mediaType: string
		mediaId: string
	}
}
const MediaPost: React.FC<MediaPostProps> = ({ params }) => {
	const { data, isLoading } = useQuery({
		queryKey: ['mediaData'],
		queryFn: async () => await getMedia(params.mediaType, params.mediaId),
	})

	if (isLoading)
		return (
			<div className="h-screen flex items-center justify-center">
				Loading...
			</div>
		)

	return (
		<div className="w-full">
			<div className="bg-peaks bg-no-repeat w-full bg-cover  h-full min-h-[400px] mb-20 flex items-center justify-center">
				<h1 className="md:text-4xl text-2xl text-white font-medium">
					{data?.title}
				</h1>
			</div>
			<div className=" mt-[20vh] h-full pb-10 w-5/6 mx-auto ">
				<div className="flex flex-col lg:flex-row mt-10 gap-32">
					<div className="basis-3/5 flex-col gap-[30px]">
						<img
							src={data?.imageUrl}
							alt="blog image"
							className="w-full min-h-[300px] object-cover rounded-xl  drop-shadow-lg full"
						/>
						<div className="flex items-center gap-[10px] py-10 " />
						<h1 className="text-lg font-bold text-zicta-blue pb-10">
							<Balancer>{data?.description}</Balancer>
						</h1>
					</div>
					<div className="basis-2/5">
						<SideMenu />
					</div>
				</div>
				<p className="text-justify leading-8 content ">
					{data && data.content ? Parser(data.content) : null}
				</p>
			</div>
		</div>
	)
}

export default MediaPost