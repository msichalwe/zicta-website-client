'use client'
import React from 'react'
import SideMenu from '../side-menu'
import { fetcher } from '@/lib/fetcher'
import useSWR from 'swr'
import Loading from '@/app/loading'

const LatestNews = () => {
	const { data: banner, isLoading } = useSWR('/api/banner', fetcher)

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="h-full w-full bg-gray-100 py-10">
			<div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-6 gap-5 ">
				<img
					src={banner?.imageUrl}
					className="md:object-fill object-contain h-full md:col-span-4 md:min-h-[40vh] "
				/>

				<div className="md:col-span-2 grid grid-rows-5 bg-white">
					<div className="row-span-1 flex items-center justify-start p-5 bg-zicta-blue text-white">
						<h1 className="font-medium text-lg uppercase">Latest</h1>
					</div>
					<div className="row-span-4">
						<SideMenu />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LatestNews
