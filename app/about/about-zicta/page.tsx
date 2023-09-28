import React from 'react'

import { Balancer } from 'react-wrap-balancer'
import getTestimonial from '@/actions/getTestimonial'
import Testimonial from '@/app/sections/testimonial-section'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import prisma from '@/lib/prismadb'

const About = async () => {
	const testimonial = await prisma.testimonial.findFirst({})

	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col ">
				<div className="bg-gradient-to-l mt-20 to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>About Us</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-xs md:text-lg text-white">
						<Balancer></Balancer>
					</p>
				</div>
				<div className="w-5/6 mx-auto space-y-10">
					<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
						<div className="flex  items-start justify-center space-y-5 flex-col">
							<h2 className="text-4xl text-right bg-gradient-to-r from-zicta-blue via-zicta-blue to-blue-400 bg-clip-text text-transparent font-bold">
								Who Are We?
							</h2>
							<p className="leading-6  text-gray-900">
								The Zambia Information and Communications Technology Authority
								(ZICTA) is a statutory body established under the Information
								and Communication Technologies Act No. 15 of 2009 to regulate
								the Information and Communication Technology (ICT) sector. ZICTA
								is also responsible for the regulation the Postal and Courier
								Services sector as well as providing oversight on Cyber Security
								in the country. ZICTA draws its mandate from the following 4
								pieces of legislation:
							</p>
							<ul className="list-disc pl-6 leading-6 space-y-5  text-gray-900">
								<li>
									<span className="font-bold">
										The Information and Communication Technologies Act No. 15 of
										2009
									</span>{' '}
									whose objective is to provide for the regulation of
									Information and Communication Technologies;
								</li>
								<li>
									<span className="font-bold">
										The Postal Services Act No. 22 of 2009{' '}
									</span>
									whose objective is to provide for the regulation of the postal
									and courier services in Zambia, and facilitate investment and
									innovation in the postal sector;
								</li>
								<li>
									<span className="font-bold">
										The Cyber Security and Cyber Crimes Act No. 2 of 2021
									</span>{' '}
									whose objective is to provide for cyber security in Zambia and
									empower ZICTA to implement the provisions of this Act;
								</li>
								<li>
									<span className="font-bold">
										The Electronic Communications and Transactions Act No. 4 of
										2021
									</span>{' '}
									whose objective is to provide for a safe and effective
									environment for electronic transactions and empower ZICTA to
									supervise compliance relating to this Act.
								</li>
							</ul>
						</div>
						<div>
							<img
								src={'/assets/zicta-home.jpg'}
								alt="zicta-home-image"
								className="w-full h-full object-cover rounded"
							/>
						</div>
					</div>
					<div>
						<p className="leading-6  text-gray-900">
							The Authority’s mandate is further informed by the ICT Policy of
							2006, the National Postal Policy of 2021 and the Cyber Security
							Policy of 2021. The ICT Policy provides the overarching policy
							framework for the development of the ICT sector and is premised on
							capacity building, a competitive and efficient ICT sector, and an
							effective legal and regulatory framework as its key pillars. The
							National Postal Policy highlights the aspirations of the
							government regarding the development of the postal sector. On the
							other hand, the Cyber Security Policy provides a governance
							framework for cyber security in the country aimed at enhancing the
							confidence of users of ICTs through the establishment of a secure,
							reliable, and trustworthy cyber environment. Through digital
							transformation, ICTs have emerged as an enabler of sustainable
							social and economic development across all sectors of the economy.
							Consequently, the Authority collaborates with various public
							agencies, private entities and not for profit establishments to
							enhance the adoption of ICTs in various segments of the economy.
						</p>
					</div>
					<div className=" space-y-20 ">
						<h2
							className="text-4xl text-center
						  bg-gradient-to-r from-zicta-blue via-zicta-blue to-blue-400 bg-clip-text text-transparent font-bold">
							Vision and Mission
						</h2>
						<div className="space-y-10">
							<div>
								<div className="rounded-full w-full lg:w-4/6 mx-auto flex items-center justify-between pr-10 lg:pr-20 bg-gradient-to-r from-gray-100 to-gray-200 ">
									<div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
										<div className="flex h-full w-full items-center justify-center rounded-full bg-white back">
											<h3 className="text-sm md:text-2xl text-zicta-blue font-bold">
												Vision
											</h3>
										</div>
									</div>
									<p className="text-xs md:text-lg  w-[70%] ">
										A Regulator at the nexus of an inclusive digital economy.
									</p>
								</div>
							</div>
							<div>
								<div className="rounded-full w-full lg:w-4/6 mx-auto flex items-center justify-between pr-10  bg-gradient-to-r from-gray-100 to-gray-200 ">
									<div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-2">
										<div className="flex h-full w-full items-center justify-center rounded-full bg-white back">
											<h3 className="text-sm md:text-2xl text-zicta-blue font-bold">
												Mission
											</h3>
										</div>
									</div>
									<p className="text-xs md:text-lg w-[70%]  ">
										To foster digital transformation through access to quality,
										secure and affordable ICT and Postal services.
									</p>
								</div>
							</div>
						</div>
					</div>

					<Testimonial data={testimonial!} />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About
