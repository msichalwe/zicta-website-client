'use client'
import NavLinks from './NavLinks'
import Button from './Button'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, Phone, Search, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { selectOpenMenu, setOpenMenu } from '@/state'
import { useRouter } from 'next/navigation'

const Navbar = () => {
	const open = useAppSelector(selectOpenMenu)
	const dispatch = useAppDispatch()
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
	const router = useRouter()

	return (
		<>
			<nav
				className={`sticky ${
					isTopOfPage ? 'top-0' : 'transform -translate-y-full'
				} w-full z-[90] bg-white transition-transform  duration-200 ease-in-out`}>
				<div className="flex items-center   justify-between w-5/6 mx-auto">
					<div className="z-[101]  lg:w-auto w-full py-2 flex justify-between">
						<img
							src="/assets/logo.png"
							alt="ZICTA"
							className="md:cursor-pointer h-14 p-2"
						/>
						<div
							className="text-3xl lg:hidden cursor-pointer "
							onClick={() => dispatch(setOpenMenu(!open))}>
							{open ? <X /> : <Menu />}
						</div>
					</div>
					<ul className=" hidden lg:flex gap-x-4 text-sm  items-center ">
						<li>
							<Link
								href={'/'}
								className="py-7 hover:text-zicta-yellow px-3 inline-block">
								Home
							</Link>
						</li>
						<li>
							<Link
								href={'/about'}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								About
							</Link>
						</li>
						<NavLinks />
						<li>
							<Link
								href={
									'https://zicta.mcidirecthire.com/External/Job?Ref=TEkBhDYErs0qhHgueWeCgt%2fyRI%2bcnPLR1MRk1RR6Cpou3ktpvROhSqni%2fBGkK6j0oVFE%2fv%2b%2bs7ZikC%2fr8Jno6%2bKXdOtrvvTBseO48pRs8yB57ycdvdLzgmNZo5S%2bjJVn0KOcSAYT10kLM0k%2b76eugg%3d%3d'
								}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Careers
							</Link>
						</li>
						<li>
							<Link
								href={'/downloads/procurement'}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Procurement
							</Link>
						</li>

						<li>
							<Link
								href={'/apply'}
								className="py-7   hover:text-zicta-yellow px-3 inline-block">
								Online Services
							</Link>
						</li>
					</ul>

					{/* Mobile View */}
					<ul
						className={`
							lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 z-[100] py-24 pl-4
							duration-500 ${open ? 'left-0' : 'left-[-100%]'}
							`}>
						<li>
							<Link href={'/'} className="py-7  lg:px-2 px-1 inline-block">
								Home
							</Link>
						</li>
						<li>
							<Link href={'/about'} className="py-7  lg:px-2 px-1 inline-block">
								About
							</Link>
						</li>
						<NavLinks />
						<li>
							<Link
								href={
									'https://zicta.mcidirecthire.com/External/Job?Ref=TEkBhDYErs0qhHgueWeCgt%2fyRI%2bcnPLR1MRk1RR6Cpou3ktpvROhSqni%2fBGkK6j0oVFE%2fv%2b%2bs7ZikC%2fr8Jno6%2bKXdOtrvvTBseO48pRs8yB57ycdvdLzgmNZo5S%2bjJVn0KOcSAYT10kLM0k%2b76eugg%3d%3d'
								}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Careers
							</Link>
						</li>
						<li>
							<Link
								href={'/downloads/procurement'}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Procurement
							</Link>
						</li>
						<li>
							<Link
								href={'/#'}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Postal & Courier
							</Link>
						</li>
						<li>
							<Link
								href={'/apply'}
								className="py-7  lg:px-2 px-1  inline-block">
								Online Services
							</Link>
						</li>
						<Link
							href={'/search'}
							className="py-7 text-zicta-yellow px-3 flex ">
							Search <Search className="ml-2 h-5 w-5" />
						</Link>
					</ul>
				</div>
				<div className="w-full p-3 h-10 text-sm bg-zicta-blue flex items-center justify-end ">
					<div className="w-5/6 mx-auto flex justify-between">
						<div className="flex">
							<p className="text-white text-sm  ">
								<Phone className="inline-block mr-2 h-4 w-4" /> Toll-free 7070
							</p>
							<p
								onClick={() => router.push('/complaints-queries')}
								className="text-zicta-yellow  text-sm pl-5 cursor-pointer ">
								Complaints & Queries
							</p>
						</div>
						<Link
							href={'/search'}
							className=" text-white hover:text-zicta-yellow px-3 flex ">
							<Search className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
