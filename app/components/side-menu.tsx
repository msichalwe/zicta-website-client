import getAllMedia from '@/actions/getAllMedia'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { format } from 'date-fns'
import React from 'react'

const SideMenu = async () => {
	const media = await getAllMedia()

	return (
		<div className="flex flex-col space-y-5 justify-around p-5">
			<h2 className="text-2xl font-black">Latest News</h2>
			<div className=" space-y-2  ">
				{media.map((post) => (
					<div key={post.id} className="gap-2">
						<article className="relative isolate flex flex-col lg:flex-row max-h-24 mb-2  ">
							<div>
								<div className="flex items-center gap-x-4 text-[10px] mb-2">
									<p className="text-gray-500">
										{format(new Date(post.createdAt), 'MMMM do, yyyy')}
									</p>
								</div>
								<div className="group relative max-w-xl space-y-2">
									<h3 className="text-md font-semibold  line-clamp-1  text-gray-900 group-hover:text-gray-600">
										<a href={`/media/${post.type}/${post.id}`}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className=" text-xs leading-2 line-clamp-2 text-gray-600">
										{post.description}
									</p>
								</div>
							</div>
						</article>
						<Separator />
					</div>
				))}
			</div>
		</div>
	)
}

export default SideMenu
