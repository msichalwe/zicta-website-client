import getServices from '@/actions/getServices'
import Footer from '@/app/components/footer'
import SideMenu from '@/app/components/side-menu'
import React from 'react'
import Parser from 'html-react-parser'

interface ServicePageProps {
	params: {
		serviceType: string
	}
}
const Service: React.FC<ServicePageProps> = async ({ params }) => {
	const service = await getServices(params.serviceType)

	return (
		<>
			<div className="w-5/6 mx-auto mt-[10vh]">
				<div
					className="rounded-xl flex items-center justify-center relative aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden "
					style={{ backgroundImage: `url(${service.imageUrl})` }}>
					<h1 className="text-7xl text-white font-medium z-[1] ">
						{service.title}
					</h1>
					<div className="bg-black absolute opacity-60 top-0 left-0 right-0 bottom-0" />
				</div>
				<div className=" mt-[20vh] h-full pb-10">
					<div className="grid grid-cols-1 gap-5 md:grid-cols-3 h-full w-full mb-10 mx-2">
						<div className=" col-span-2 flex-col ">
							<h1 className="text-2xl font-medium text-zicta-blue pb-10">
								{service.description}
							</h1>
							<div className=" content text-justify leading-8">
								{Parser(service?.content)}
							</div>
						</div>
						<div className="col-span-1 hidden md:block">
							<SideMenu />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Service
