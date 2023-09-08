'use client'

import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { Balancer } from 'react-wrap-balancer'

type NavProps = {
	children: React.ReactNode
}

const NavWrapper: React.FC<NavProps> = ({ children }) => {
	const pathname = usePathname()

	const routes = [
		{
			href: `/services/consumer-protection/sexting`,
			label: 'Sexting',
			active: pathname === '/services/consumer-protection/sexting',
		},
		{
			href: `/services/consumer-protection/identity-theft`,
			label: 'Identity Theft',
			active: pathname === '/services/consumer-protection/identity-theft',
		},
		{
			href: `/services/consumer-protection/consumer-leaflet`,
			label: 'Consumer Leaflet',
			active: pathname === '/services/consumer-protection/consumer-leaflet',
		},
		{
			href: `/services/consumer-protection/unwanted-contact`,
			label: 'Unwanted Contact',
			active: pathname === '/services/consumer-protection/unwanted-contact',
		},
		{
			href: `/services/consumer-protection/digital-reputation`,
			label: 'Digital Reputation',
			active: pathname === '/services/consumer-protection/digital-reputation',
		},
		{
			href: `/services/consumer-protection/mobile-phone-security`,
			label: 'Mobile Phone Security',
			active:
				pathname === '/services/consumer-protection/mobile-phone-security',
		},
		{
			href: `/services/consumer-protection/sim-registration`,
			label: 'SIM Registration (FAQ)',
			active: pathname === '/services/consumer-protection/sim-registration',
		},
		{
			href: `/services/consumer-protection/consumer-responsibilities`,
			label: 'Consumer Responsibilities',
			active:
				pathname === '/services/consumer-protection/consumer-responsibilities',
		},
	]

	const router = useRouter()
	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col my-10">
				<div className="bg-gradient-to-l mt-10 md:mt-0  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px] flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>Consumer Protection</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-lg text-white">
						<Balancer>
							We are committed to protecting the rights of consumers
						</Balancer>
					</p>
				</div>
				<div className="w-5/6 mx-auto">
					<h2
						className=" cursor-pointer font-medium text-xl mb-2 uppercase"
						onClick={() => router.push('/services/consumer-protection')}>
						Consumer Protection
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 w-full md:mx-auto">
						<div>
							<nav className="w-full grid grid-cols-3 md:grid-cols-1 border-t-2 border-zicta-blue ">
								{routes.map((route) => (
									<Link
										key={route.href}
										href={route.href}
										className={cn(
											'w-full  flex items-center justify-center text-left text-[10px] md:text-base border-b border-gray-100  min-h-[40px] cursor-pointer',
											route.active
												? 'text-white bg-[#7CA5B8]'
												: 'text-gray-900 hover:text-white hover:bg-[#a1cce0]',
										)}>
										<div className="text-left flex items-start w-5/6 ">
											<Balancer> {route.label}</Balancer>
										</div>
									</Link>
								))}
							</nav>
						</div>
						<div className="lg:col-span-5 md:col-span-3 min-h-[80vh]">
							{children}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default NavWrapper
