import getAllMedia from '@/actions/getAllMedia'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { format } from 'date-fns'
import React from 'react'

const SideMenu = async () => {
	const media = await getAllMedia()

	return (
		<div className="flex flex-col justify-around pl-20">
			<h1 className="text-xl text-zicta-blue font-bold">Latest at ZICTA</h1>
			<div className=" space-y-5 lg:mt-10 ">
				{media.map((post) => (
					<div key={post.id} className="gap-2">
						<article className="relative isolate flex flex-col gap-4 lg:flex-row max-h-52 mb-4">
							<div>
								<div className="flex items-center gap-x-4 text-xs">
									<p className="text-gray-500">
										{format(new Date(post.createdAt), 'MMMM do, yyyy')}
									</p>
									<Link
										href={`/media/${post.type}`}
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
										{post.type.toUpperCase()}
									</Link>
								</div>
								<div className="group relative max-w-xl">
									<h3 className="mt-3 text-md font-semibold  line-clamp-2 leading-6 text-gray-900 group-hover:text-gray-600">
										<a href={`/media/${post.type}/${post.id}`}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 text-xs leading-6 line-clamp-2 text-gray-600">
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
