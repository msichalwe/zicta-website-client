'use client'

import Navbar from '@/app/components/navbar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Balancer } from 'react-wrap-balancer'

type NavWrapperProps = {
	children: React.ReactNode
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const pathname = usePathname()

	const routes = [
		{
			href: `/registry/dealer-certificates`,
			label: 'Registered Dealers',
			active: pathname === '/registry/dealer-certificates',
		},
	]

	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col mt-10">
				<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-10 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>ZICTA Certification and Verification Registry</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 hidden md:block text-sm text-white">
						<Balancer>
							Discover the comprehensive ZICTA Certification and Verification
							Registry. This platform serves as a trustworthy resource to
							validate certifications, licenses, and other official designations
							provided by ZICTA. Whether you're a consumer, business, or
							industry professional, you can rely on this registry to
							authenticate the status of certifications issued by ZICTA.
							Empowering you with accurate information for confident decisions.
							Explore the ZICTA Certification and Verification Registry now.
						</Balancer>
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full md:w-5/6 md:mx-auto">
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

export default NavWrapper
