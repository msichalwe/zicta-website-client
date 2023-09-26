import getServices from '@/actions/getServices'
import Footer from '@/app/components/footer'
import SideMenu from '@/app/components/side-menu'
import React from 'react'
import Parser from 'html-react-parser'
import Navbar from '@/app/components/navbar'

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
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-screen md:h-[80vh]">
					<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  space-y-6 flex justify-center text-white px-5 md:px-20 flex-col">
						{/* @ts-ignore */}

						<h1 className="font-bold text-2xl md:text-5xl ">{service.title}</h1>
						{/* @ts-ignore */}
						<p className=" ">{service.description}</p>
					</div>
					<div
						className="bg-cover bg-no-repeat h-full"
						style={{ backgroundImage: `url(${service?.imageUrl})` }}
					/>
				</div>
			</div>
		</>
	)
}

export default Service
