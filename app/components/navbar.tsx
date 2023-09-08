'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MainNav } from './main-nav'
import { AlignJustify, Menu, Search, X } from 'lucide-react'
import NavLinks from './navbar-new/NavLinks'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { selectOpenMenu, setOpenMenu } from '@/state'

const Navbar = () => {
	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
	const open = useAppSelector(selectOpenMenu)
	const dispatch = useAppDispatch()

	return (
		<nav>
			<div
				className={`bg-white  text-zicta-blu ${flexBetween} fixed top-0 z-30 w-full py-4 `}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full z-[1000] gap-16`}>
						<Link href={'/'}>
							<Image
								src={'/assets/logo.png'}
								alt="ZICTA Logo"
								width={50}
								height={50}
							/>
						</Link>

						{/* Right side */}
						{isAboveMediumScreens ? (
							<div className={`flex w-full items-center justify-end `}>
								<MainNav className="mx-6 " />
							</div>
						) : (
							<div
								className="text-3xl  lg:hidden cursor-pointer "
								onClick={() => dispatch(setOpenMenu(!open))}>
								{open ? <X /> : <Menu />}
							</div>
						)}
					</div>
				</div>
			</div>
			{!isAboveMediumScreens && (
				<div className="relative">
					<ul
						className={`
				lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 z-[100] py-24 pl-4
				duration-500 ${open ? 'left-0' : 'left-[-100%]'}
				`}>
						<div
							className="text-3xl absolute top-4 right-8 lg:hidden cursor-pointer "
							onClick={() => dispatch(setOpenMenu(!open))}>
							{open ? <X /> : ''}
						</div>

						<li>
							<Link
								href={'/'}
								onClick={() => dispatch(setOpenMenu(false))}
								className="py-7  lg:px-2 px-1 inline-block">
								Home
							</Link>
						</li>
						<NavLinks />
						{/* <li>
							<Link
								onClick={() => dispatch(setOpenMenu(false))}
								href={
									'https://zicta.mcidirecthire.com/External/Job?Ref=TEkBhDYErs0qhHgueWeCgt%2fyRI%2bcnPLR1MRk1RR6Cpou3ktpvROhSqni%2fBGkK6j0oVFE%2fv%2b%2bs7ZikC%2fr8Jno6%2bKXdOtrvvTBseO48pRs8yB57ycdvdLzgmNZo5S%2bjJVn0KOcSAYT10kLM0k%2b76eugg%3d%3d'
								}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Careers
							</Link>
						</li>
						<li>
							<Link
								onClick={() => dispatch(setOpenMenu(false))}
								href={'/downloads/procurement'}
								className="py-7  lg:px-2 px-1 hover:text-zicta-yellow inline-block">
								Procurement
							</Link>
						</li> */}

						<li>
							<Link
								onClick={() => dispatch(setOpenMenu(false))}
								href={'/apply'}
								className="py-7  lg:px-2 px-1  inline-block">
								Online Services
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	)
}

export default Navbar
