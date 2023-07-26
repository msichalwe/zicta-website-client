'use client'
import getAllServices from '@/actions/getAllServices'
import { useAppDispatch } from '@/hooks/hooks'
import { setOpenMenu } from '@/state'
import { useQuery } from '@tanstack/react-query'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const NavLinks = () => {
	const { data: services, isLoading } = useQuery({
		queryKey: ['servicesData'],
		queryFn: getAllServices,
	})
	const links = [
		{
			name: 'Services',
			submenu: true,
			sublinks: [
				{
					Head: 'All Services',
					sublink: services?.map((item) => ({
						name: item.title,
					})),
				},
			],
		},
		{
			name: 'Media',
			submenu: true,
			sublinks: [
				{
					Head: 'All Available Media',
					sublink: [
						{
							name: 'News',
						},
						{
							name: 'Events',
						},
						{
							name: 'Publications',
						},
					],
				},
			],
		},
		{
			name: 'Resources',
			submenu: true,
			sublinks: [
				{
					Head: 'All Resources',
					sublink: [
						{
							name: 'Legislation',
						},
						{
							name: 'Guidelines',
						},
						{
							name: 'Strategic Plans',
						},
						{
							name: 'Procurement',
						},
						,
						{
							name: 'Press Releases',
						},
					],
				},
			],
		},
	]

	const [heading, setHeading] = useState('')
	const [subHeading, setSubHeading] = useState('')
	const dispatch = useAppDispatch()
	return (
		<>
			{links.map((link) => (
				<div>
					<div className="px-3 text-left md:cursor-pointer group">
						<h1
							className="py-7 md:hover:text-zicta-yellow flex justify-between items-center md:pr-0 pr-5 group"
							onClick={() => {
								heading !== link.name ? setHeading(link.name) : setHeading('')
								setSubHeading('')
							}}>
							{link.name}
							<span className="text-xl md:hidden inline">
								{heading === link.name ? <ChevronUp /> : <ChevronDown />}
							</span>
							<span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
								{link.submenu ? <ChevronDown /> : ''}
							</span>
						</h1>
						{link.submenu && (
							<div>
								<div className="absolute top-20 hidden group-hover:md:block hover:md:block">
									<div className="py-3">
										<div
											className="w-4 h-4 left-3 absolute 
					  mt-1 bg-white rotate-45"></div>
									</div>
									<div className="bg-white p-5  w-[250px] flex items-center ">
										{link?.sublinks?.map((mysublinks) => (
											<div>
												<h1 className="text-lg font-semibold">
													{mysublinks.Head}
												</h1>
												{mysublinks?.sublink?.map((slink) => {
													const href = `/${link.name.toLowerCase()}/${slink?.name
														.toLowerCase()
														.replace(/ /g, '-')}`
													return (
														<li className="text-sm hover:text-zicta-yellow text-gray-600 my-2.5">
															<Link href={href} className="hover:text-primary">
																{slink?.name}
															</Link>
														</li>
													)
												})}
											</div>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
					{/* Mobile menus */}
					<div
						className={`
			  ${heading === link.name ? 'md:hidden' : 'hidden'}
			`}>
						{/* sublinks */}
						{link?.sublinks?.map((slinks) => (
							<div>
								<div>
									<h1
										onClick={() =>
											subHeading !== slinks.Head
												? setSubHeading(slinks.Head)
												: setSubHeading('')
										}
										className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center text-sm">
										{slinks.Head}

										<span className="text-xl md:mt-1 md:ml-2 inline">
											{subHeading === slinks.Head ? (
												<ChevronUp />
											) : (
												<ChevronDown />
											)}
										</span>
									</h1>
									<div
										className={`${
											subHeading === slinks.Head ? 'md:hidden' : 'hidden'
										}`}>
										{slinks?.sublink?.map((slink) => {
											const href = `/${link.name.toLowerCase()}/${slink?.name
												.toLowerCase()
												.replace(/ /g, '-')}`
											return (
												<li
													className="text-sm text-gray-600 ml-8 my-2.5"
													onClick={() => dispatch(setOpenMenu(false))}>
													<Link href={href} className="hover:text-primary">
														{slink?.name}
													</Link>
												</li>
											)
										})}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	)
}

export default NavLinks
