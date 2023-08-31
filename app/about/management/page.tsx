'use client'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

const Management = () => {
	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col ">
				<div className="bg-gradient-to-l mt-20 to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>Management Team of the Authority</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-xs md:text-lg text-white">
						<Balancer></Balancer>
					</p>
				</div>
				<div className="min-h-screen mx-auto w-5/6">
					<div className="w-3/5 space-y-5">
						<h2 className="text-4xl  bg-gradient-to-r from-zicta-blue  to-blue-400 bg-clip-text text-transparent font-bold">
							Meet the Team of Directors
						</h2>
						<p className="text-lg ">
							<Balancer>
								Get to know the dedicated and experienced management team at
								ZICTA who lead us towards our mission and goals.
							</Balancer>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Management
