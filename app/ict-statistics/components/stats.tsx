'use client'

import Navbar from '@/app/components/navbar-new/Navbar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Balancer } from 'react-wrap-balancer'

type StatisticsProps = {
	children: React.ReactNode
}

const StatisticsWrapper: React.FC<StatisticsProps> = ({ children }) => {
	const pathname = usePathname()

	const routes = [
		{
			href: `/ict-statistics`,
			label: 'Statistics',
			active: pathname === '/ict-statistics',
		},
		{
			href: `/ict-statistics/mno-stats`,
			label: 'Mobile Network Operator Statistics',
			active: pathname === '/ict-statistics/mno-stats',
		},
		{
			href: `/ict-statistics/isp-stats`,
			label: 'Internet Service Providers Statistics',
			active: pathname === '/ict-statistics/isp-stats',
		},
		{
			href: `/ict-statistics/pstn-stats`,
			label: 'PSTN Statistics',
			active: pathname === '/ict-statistics/pstn-stats',
		},
	]
	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col">
				<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>Exploring ICT in Numbers: ICT Statistics</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-lg text-white">
						<Balancer>
							Delve into the world of Information and Communication Technology
							(ICT) through our comprehensive ICT Statistics page. Here, you'll
							find a wealth of data and insights, presented in
							easy-to-understand formats
						</Balancer>
					</p>
				</div>
				<div className="grid grid-cols-3 gap-5 w-5/6 mx-auto">
					<div>
						<nav className="w-4/5 mx-auto flex flex-col border-t-2 border-zicta-blue ">
							{routes.map((route) => (
								<Link
									key={route.href}
									href={route.href}
									className={cn(
										'w-full  flex items-center justify-center  min-h-[40px] cursor-pointer',
										route.active
											? 'text-white bg-[#7CA5B8]'
											: 'text-gray-900 hover:text-white hover:bg-[#a1cce0]',
									)}>
									{route.label}
								</Link>
							))}
						</nav>
					</div>
					<div className="col-span-2">{children}</div>
				</div>
			</div>
		</>
	)
}

export default StatisticsWrapper
