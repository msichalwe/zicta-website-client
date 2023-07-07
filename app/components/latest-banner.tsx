import React from 'react'

const LatestBanner = () => {
	return (
		<div className="py-5 bg-zicta-blue-light text-zicta-blue h-full w-full flex items-center justify-center">
			<div className="w-5/6 p-10 h-full space-y-8 ">
				<div>
					<h2 className="text-4xl font-bold">Latest at ZICTA</h2>
				</div>
				<img
					src="/assets/zicta-banner.png"
					className="h-full w-full object-cover object-center rounded-xl shadow-lg"
					alt="banner"
				/>
			</div>
		</div>
	)
}

export default LatestBanner
