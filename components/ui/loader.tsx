'use client'
import Lottie from 'lottie-react'
import loaderAnimation from '@/public/assets/loader-2.json'
import dotLoader from '@/public/assets/dot-loader.json'
import logo from '@/public/assets/hero.png'
import Image from 'next/image'

const Loader = () => {
	return (
		<div className="flex justify-center transition items-center z-50 absolute bg-zicta-blue left-0 top-0 bottom-0 right-0">
			<div className="flex">
				<Image
					width={100}
					height={100}
					src={logo}
					alt="logo"
					className="animate-pulse"
				/>
			</div>
		</div>
	)
}

export default Loader
