import React from 'react'
import SideMenu from '../side-menu'

const LatestNews = () => {
	return (
		<div className="h-full w-full bg-gray-100 py-10">
			<div className="w-5/6 mx-auto grid grid-cols-6 gap-5 ">
				<div className="col-span-4 min-h-[40vh] bg-zicta-banner bg-cover bg-no-repeat"></div>
				<div className="col-span-2 min-h-[40vh] grid grid-rows-5 bg-white">
					<div className="row-span-1 flex items-center justify-start p-5 bg-zicta-blue text-white">
						<h1 className="font-medium text-lg uppercase">Latest News</h1>
					</div>
					<div className="row-span-4">
						<SideMenu />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LatestNews
