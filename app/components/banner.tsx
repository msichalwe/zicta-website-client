'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Banner() {
	const [isVisible, setIsVisible] = useState(true)

	const pathname = usePathname()

	useEffect(() => {
		if (pathname === '/awards/vote') {
			setIsVisible(false)
		}
	}, [pathname])

	const handleDismiss = () => {
		setIsVisible(false)
	}

	if (!isVisible) {
		return null
	}

	return (
		<div
			className={`relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 transition-opacity duration-500 ease-out ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}>
			<div
				className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				aria-hidden="true">
				<div
					className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
					}}
				/>
			</div>
			<div
				className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				aria-hidden="true">
				<div
					className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
					}}
				/>
			</div>
			<p className="text-sm leading-6 text-gray-900">
				<Link href="/awards/vote">
					<strong className="font-semibold">
						Voting for the Inaugural ICT, Postal & Courier Awards{' '}
					</strong>
					is currently open. Click here to vote&nbsp;
					<span aria-hidden="true">&rarr;</span>
				</Link>
			</p>
			<div className="flex flex-1 justify-end">
				<button
					type="button"
					className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
					onClick={handleDismiss}>
					<span className="sr-only">Dismiss</span>
					<X className="h-5 w-5 text-gray-900" aria-hidden="true" />
				</button>
			</div>
		</div>
	)
}
