import Image from 'next/image'
import React from 'react'

const MediaCard = () => {
	return (
		<div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 mx-10">
			{/* Images and actions */}
			<div className="aspect-square rounded-xl bg-gray-100 relative">
				<Image
					src="/assets/zicta-launches.jpg"
					fill
					alt="media image"
					className="aspect-square rounded-md object-cover"
				/>
			</div>
			<div className="">
				<div className="flex items-center">
					<span className="rounded-full h-2 w-2 bg-zicta-blue mr-2" />
					<p className="text-sm text-gray-500">Cyber Security</p>
				</div>
				<p className="font-semibold text-lg">
					Zicta Launches Whatever they launched
				</p>
			</div>
		</div>
	)
}

export default MediaCard
