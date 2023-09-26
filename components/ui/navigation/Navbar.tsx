'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Button } from '../button'
import { Menu, SearchIcon } from 'lucide-react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	return (
		<nav className="bg-white ">
			<div className="flex items-center font-medium justify-around">
				<div className="z-50 p-5 md:w-auto w-full flex justify-between ">
					<img
						onClick={() => router.push('/')}
						src="/assets/logo.png"
						alt="logo"
						className="cursor-pointer h-9 w-9"
					/>
					<div
						className="text-3xl md:hidden cursor-pointer"
						onClick={() => setOpen(!open)}>
						{!open ? <Menu /> : <X />}
					</div>
				</div>
				<ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
					<li>
						<Link href="/" className=" py-7 px-3 inline-block ">
							Home
						</Link>
					</li>
					<NavLinks />
				</ul>
				<div className="md:block hidden">
					<Button type="button" size="icon">
						<span className="flex">
							<SearchIcon className="h-4 w-4" />
						</span>
					</Button>
				</div>
				{/* Mobile Menu */}
				<ul
					className={`md:hidden bg-white w-full h-full absolute bottom-0 py-24 pl-4 `}>
					<li>
						<Link href="/" className=" py-7 px-3 inline-block ">
							Home
						</Link>
					</li>
					<NavLinks />
					<div className="py-5">
						<Button type="button" size="icon">
							<span className="flex">
								<SearchIcon className="h-4 w-4" />
							</span>
						</Button>
					</div>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
