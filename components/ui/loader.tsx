'use client'
import Lottie from 'lottie-react'
import loaderAnimation from '@/public/assets/loader-2.json'

const Loader = () => {
	return (
		<div className="flex justify-center items-center z-50 absolute bg-[#DDF3F4] left-0 top-0 bottom-0 right-0">
			<Lottie className="h-52 w-52" animationData={loaderAnimation} />
		</div>
	)
}

export default Loader
