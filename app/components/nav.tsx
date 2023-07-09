'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MainNav } from './main-nav'
import { AlignJustify, X } from 'lucide-react'

const Navbar = () => {
	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery('(min-width: 786px)')
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

	return (
		<nav>
			<div
				className={`bg-white  text-zicta-blue ${flexBetween} shadow-lg fixed top-0 z-30 w-full py-4 `}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
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
							<div>
								<button
									className="rounded-full bg-zicta-blue p-2"
									onClick={() => setIsMenuToggled(!isMenuToggled)}>
									<AlignJustify className="h-6 w-6 text-white" />
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed bottom-0 right-0 z-40 h-full w-[300px] text-gray-900 bg-gray-100 drop-shadow-xl ">
					{/* CLOSE ICON */}
					<div className="flex justify-end p-12">
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<X className="h-6 w-6 text-gray-400" />
						</button>
					</div>
					{/* MENU ITEMS */}
					<div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
						<MainNav className="mx-6 flex-col md:flex-row h-full " />
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
