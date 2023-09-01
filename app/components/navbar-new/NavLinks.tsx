'use client'
import getAllServices from '@/actions/getAllServices'
import { useAppDispatch } from '@/hooks/hooks'
import { setOpenMenu } from '@/state'
import { useQuery } from '@tanstack/react-query'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const NavLinks = () => {
	const links = [
		{
			name: 'About',
			submenu: true,
			sublinks: [
				{
					sublink: [
						{
							name: 'About ZICTA',
						},
						{
							name: 'Management',
						},
					],
				},
			],
		},
		{
			name: 'Services',
			submenu: true,
			sublinks: [
				{
					sublink: [
						{
							name: 'Licensing',
						},
						{
							name: 'Consumer Protection',
						},
						{
							name: 'Technical Regulation',
						},
						{
							name: 'Economic Regulation',
						},
						{
							name: 'Service Charter',
						},
					],
				},
			],
		},
		{
			name: 'Press Room',
			submenu: true,
			sublinks: [
				{
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
			name: 'Downloads',
			submenu: true,
			sublinks: [
				{
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
					<div className=" text-left md:cursor-pointer group">
						<h1
							className="md:py-7 py-5 md:hover:text-zicta-yellow flex justify-between items-center md:pr-0 pr-5 group"
							onClick={() => {
								heading !== link.name ? setHeading(link.name) : setHeading('')
								setSubHeading('')
							}}>
							{link.name}
							<span className="text-xl md:hidden inline">
								{heading === link.name ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
							</span>
							<span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
								{link.submenu ? <ChevronDown className="h-4 w-4" /> : ''}
							</span>
						</h1>
					</div>
					{/* Mobile menus */}
					<div
						className={`
			  ${heading === link.name ? 'lg:hidden' : 'hidden'}
			`}>
						{link?.sublinks?.map((slinks) => (
							<div className="transition ease-in-out duration-100  p-2 ">
								<div>
									<div className={`${' space-y-6'}`}>
										{slinks?.sublink?.map((slink) => {
											const href = `/${link.name
												.toLowerCase()
												.replace(/ /g, '-')}/${slink?.name
												.toLowerCase()
												.replace(/ /g, '-')}`
											return (
												<li
													className="text-sm text-gray-600 ml-8 my-4 "
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
