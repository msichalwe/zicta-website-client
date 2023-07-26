import React from 'react'
import Heading from '../components/Heading'

import SideMenu from '../components/side-menu'
import Parser from 'html-react-parser'
import getAbout from '@/actions/getAbout'
import { Balancer } from 'react-wrap-balancer'
import getTestimonial from '@/actions/getTestimonial'
import Testimonial from '../sections/testimonial-section'

const About = async () => {
	const data = await getAbout()
	const testimonial = await getTestimonial()
	return (
		<div className=" w-5/6 mx-auto my-10 min-h-screen ">
			<div
				className="rounded-xl flex items-center justify-center relative aspect-square md:aspect-[2.4/1] mb-10 bg-cover overflow-hidden "
				style={{ backgroundImage: `url(${data.imageUrl})` }}>
				<h1 className=" text-lg text-center md:text-4xl text-white font-bold z-[1] ">
					<Balancer>{data.title}</Balancer>
				</h1>
				<div className="bg-black absolute opacity-60 top-0 left-0 right-0 bottom-0" />
			</div>
			<Heading title={`About ZICTA`} description={`Learn more about ZICTA`} />
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3 h-full w-full my-10 mx-2">
				<div className=" col-span-2 flex-col ">
					<h1 className="text-md font-medium text-zicta-blue pb-10">
						{data.description}
					</h1>
					<div className="content text-justify leading-8">
						{Parser(data.content)}
					</div>
				</div>
				<div className="col-span-1 hidden md:block">
					<SideMenu />
				</div>
			</div>
			<Testimonial data={testimonial} />
		</div>
	)
}

export default About
