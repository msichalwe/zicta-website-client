'use client'
import React, { useState } from 'react'

interface NavItem {
	label: string
	link?: string
	active?: boolean
	dropdown?: NavItem[]
}

interface NavbarProps {
	data: NavItem[]
}

const Navbar2: React.FC<NavbarProps> = ({ data }) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false)
	const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen)
	}

	const toggleDoubleDropdown = () => {
		setDoubleDropdownOpen(!isDoubleDropdownOpen)
	}

	const renderDropdown = (dropdownItems: NavItem[]) => {
		return (
			<div
				className={`z-10 ${
					isDropdownOpen ? '' : 'hidden'
				} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
				id="dropdownNavbar">
				<ul
					className="py-2 text-sm text-gray-700 dark:text-gray-400"
					aria-labelledby="dropdownLargeButton">
					{dropdownItems.map((item, index) => (
						<li key={index}>
							<a
								href={item.link}
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		)
	}

	const renderDoubleDropdown = (dropdownItems: NavItem[]) => {
		return (
			<div
				className={`z-10 ${
					isDoubleDropdownOpen ? '' : 'hidden'
				} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
				id="doubleDropdown">
				<ul
					className="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="doubleDropdownButton">
					{dropdownItems.map((item, index) => (
						<li key={index}>
							<a
								href={item.link}
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		)
	}

	const renderNavItem = (item: NavItem) => {
		if (item.dropdown) {
			return (
				<li key={item.label} aria-labelledby="dropdownNavbarLink">
					<button
						id="dropdownNavbarLink"
						data-dropdown-toggle="dropdownNavbar"
						className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
						onClick={toggleDropdown}>
						{item.label}{' '}
						<svg
							className="w-2.5 h-2.5 ml-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					{renderDropdown(item.dropdown)}
				</li>
			)
		}

		return (
			<li key={item.label}>
				<a
					href={item.link}
					className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
						item.active ? 'text-white bg-blue-700' : 'text-gray-900'
					} md:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
					aria-current={item.active ? 'page' : undefined}>
					{item.label}
				</a>
			</li>
		)
	}

	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Flowbite
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-multi-level"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-multi-level"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-multi-level">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{data.map((item) => renderNavItem(item))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar2
