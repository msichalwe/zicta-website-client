import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const posts = [
	{
		id: 1,
		title: 'ZICTA Launches Cyber Security Awareness Campaign',
		href: '#',
		imageUrl: '/assets/zicta-launches.jpg',
		category: {
			title: 'Cyber Security',
			href: '#',
		},
		description: 'ZICTA Launches Cyber Security Awareness Campaign',
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
	},
	{
		id: 2,
		href: '#',
		title: 'ZICTA Launches Cyber Security Awareness Campaign',
		imageUrl: '/assets/zicta-launches.jpg',
		category: {
			title: 'Cyber Security',
			href: '#',
		},
		description: 'ZICTA Launches Cyber Security Awareness Campaign',
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
	},

	{
		id: 3,
		href: '#',
		title: 'ZICTA Launches Cyber Security Awareness Campaign',
		imageUrl: '/assets/zicta-launches.jpg',
		category: {
			title: 'Cyber Security',
			href: '#',
		},
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		description: 'ZICTA Launches Cyber Security Awareness Campaign',
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
]

const SideMenu = () => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl text-zicta-blue font-bold">Related Posts</h1>
			<div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
				{posts.map((post) => (
					<div key={post.id} className="gap-2">
						<article className="relative isolate flex flex-col gap-4 lg:flex-row max-h-52 mb-4">
							<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
								<img
									src={post.imageUrl}
									alt=""
									className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
							<div>
								<div className="flex items-center gap-x-4 text-xs">
									<time dateTime={post.datetime} className="text-gray-500">
										{post.date}
									</time>
									<a
										href={post.category.href}
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
										{post.category.title}
									</a>
								</div>
								<div className="group relative max-w-xl">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
										<a href={post.href}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 text-sm leading-6 text-gray-600">
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
