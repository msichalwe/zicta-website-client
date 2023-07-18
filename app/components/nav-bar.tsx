import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar2 = () => {
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto  p-2 text-sm">
				<Link href={'/'}>
					<Image
						src={'/assets/logo.png'}
						alt="ZICTA Logo"
						width={40}
						height={40}
					/>
				</Link>

				<div className=" w-full block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
						<li>
							<Link
								href="/report"
								className="block py-2 pl-3 pr-4 text-zicta-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
								Report Child Abuse
							</Link>
						</li>
						<li>
							<Link
								href="/faqs"
								className="block py-2 pl-3 pr-4 text-zicta-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
								FAQs
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar2
