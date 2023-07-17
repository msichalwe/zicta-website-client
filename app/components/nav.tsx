'use client'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MainNav } from './main-nav'
import { AlignJustify, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Navbar = () => {
	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery('(min-width: 786px)')
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

	const router = useRouter()

	return (
		<nav
			className={`sticky ${
				isTopOfPage ? 'top-0' : 'transform -translate-y-full'
			} w-full z-[90] transition-transform duration-200 ease-in-out`}>
			<div
				className={`bg-white text-zicta-blue ${flexBetween} shadow-lg  top-0 z-30  w-full py-4 `}>
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
						{/* <div>
							<Button variant="ghost" onClick={() => router.push('/search')}>
								Search <Search className="ml-2 h-5 w-5" />
							</Button>
						</div> */}
					</div>
				</div>
			</div>
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed bottom-0 right-0 z-40 h-full flex flex-col items-center w-full text-gray-900 bg-gray-100 drop-shadow-xl ">
					{/* CLOSE ICON */}
					<div className="flex justify-end p-12">
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<X className="h-6 w-6 text-gray-400" />
						</button>
					</div>
					{/* MENU ITEMS */}
					<div className={` flex flex-col h-full gap-10 text-2xl`}>
						<MainNav className="mx-6 flex-col md:flex-row h-full " />
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
