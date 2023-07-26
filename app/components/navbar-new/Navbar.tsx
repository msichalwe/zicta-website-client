'use client'
import NavLinks from './NavLinks'
import Button from './Button'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { selectOpenMenu, setOpenMenu } from '@/state'

const Navbar = () => {
	const open = useAppSelector(selectOpenMenu)
	const dispatch = useAppDispatch()
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

	return (
		<>
			<nav
				className={`sticky ${
					isTopOfPage ? 'top-0' : 'transform -translate-y-full'
				} w-full z-[90] bg-white transition-transform duration-200 ease-in-out`}>
				<div className="flex items-center font-medium justify-between w-5/6 mx-auto">
					<div className="z-[101] p-5 lg:w-auto w-full flex justify-between">
						<img
							src="/assets/logo.png"
							alt="ZICTA"
							className="md:cursor-pointer h-12"
						/>
						<div
							className="text-3xl lg:hidden cursor-pointer "
							onClick={() => dispatch(setOpenMenu(!open))}>
							{open ? <X /> : <Menu />}
						</div>
					</div>
					<ul className=" hidden lg:flex gap-5  items-center ">
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
								className="lg:py-7 py-4 lg:px-3 px-1 hover:text-zicta-yellow inline-block">
								About
							</Link>
						</li>
						<NavLinks />
						<li>
							<Link
								href={'/apply'}
								className="lg:py-7 py-4  hover:text-zicta-yellow px-3 inline-block">
								Apply
							</Link>
						</li>
						<li>
							<Link
								href={'/search'}
								className="lg:py-7 py-4  hover:text-zicta-yellow px-3 flex ">
								Search <Search className="ml-2" />
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
							<Link
								href={'/'}
								className="lg:py-7 py-4 lg:px-3 px-1 inline-block">
								Home
							</Link>
						</li>
						<li>
							<Link
								href={'/about'}
								className="lg:py-7 py-4 lg:px-3 px-1 inline-block">
								About
							</Link>
						</li>
						<NavLinks />
						<li>
							<Link
								href={'/apply'}
								className="lg:py-7 py-4 lg:px-3 px-1  inline-block">
								Apply
							</Link>
						</li>
						<Link
							href={'/search'}
							className="py-7 text-zicta-yellow px-3 flex ">
							Search <Search className="ml-2" />
						</Link>
					</ul>
				</div>
				<div className="w-full p-2 bg-zicta-blue flex items-center justify-end ">
					<div className="w-5/6 mx-auto flex justify-end ">
						<Link
							href="https://report.iwf.org.uk/zm"
							className="text-white text-xs   ">
							Report Child Abuse
						</Link>
						<Link
							href="/complaints-queries"
							className="text-zicta-yellow text-xs pl-5 ">
							Complaints & Queries
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
