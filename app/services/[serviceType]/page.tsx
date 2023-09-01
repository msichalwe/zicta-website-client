import getServices from '@/actions/getServices'
import Footer from '@/app/components/footer'
import SideMenu from '@/app/components/side-menu'
import React from 'react'
import Parser from 'html-react-parser'
import Navbar from '@/app/components/navbar-new/Navbar'

interface ServicePageProps {
	params: {
		serviceType: string
	}
}
const Service: React.FC<ServicePageProps> = async ({ params }) => {
	const service = await getServices(params.serviceType)

	return (
		<>
			<Navbar />
			<div className="">
				{/* <div
					className="rounded-xl flex items-center justify-center relative  w-full  h-full min-h-[400px] bg-cover overflow-hidden "
					style={{ backgroundImage: `url(${service.imageUrl})` }}>
					<h1 className="md:text-7xl text-4xl text-white font-medium z-[1] ">
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
				</div> */}
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-screen md:h-[80vh]">
					<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  space-y-6 flex justify-center text-white px-5 md:px-20 flex-col">
						<h1 className="font-bold text-2xl md:text-5xl ">{service.title}</h1>
						<p className=" ">{service.description}</p>
					</div>
					<div
						className="bg-cover bg-no-repeat h-full"
						style={{ backgroundImage: `url(${service.imageUrl})` }}
					/>
				</div>
			</div>
		</>
	)
}

export default Service
