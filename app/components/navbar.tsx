'use client'
import Image from 'next/image'
import { MainNav } from './main-nav'
const Navbar = () => {
	return (
		<div className="border-b">
			<div className="flex h-16 items-center px-4">
				<div className="mx-auto sm:mx-10">
					<Image
						src="/assets/logo.png"
						alt="ZICTA Logo"
						width={50}
						height={50}
					/>
				</div>
				<MainNav className="mx-6" />
				<div className="ml-auto flex items-center justify-center ">
					<div>search</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
