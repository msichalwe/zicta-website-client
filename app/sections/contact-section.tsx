'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import ContactForm from '@/app/components/contact-form'

const socialIcons = [
	{
		url: 'https://www.facebook.com/ZambiaICTAuthority',
		fgColor: 'white',
		bgColor: 'transparent',
	},
	{
		url: 'https://twitter.com/ZictaZM',
		fgColor: 'white',
		bgColor: 'transparent',
	},
	{
		url: 'https://www.linkedin.com/company/zambia-information-and-communications-technology-authority/',
		fgColor: 'white',
		bgColor: 'transparent',
	},
	{
		url: 'https://www.youtube.com/@ZambiaICTAuthority',
		fgColor: 'white',
		bgColor: 'transparent',
	},
]

const contactSideItems: Array<contactSideItemProps> = [
	{
		title: 'Email Us',
		description: 'Our friendly team is here to help:',
		content: 'info@zicta.zm',
	},
	{
		title: 'Visit Us',
		description: 'Come say hello at our office HQ:',
		content: 'Plot 4909 Corner of Independence Avenue & United Nations Road',
	},
	{
		title: 'Call Us',
		description: 'Use our Toll Free number:',
		content: '7070',
	},
]

interface contactSideItemProps {
	title: string
	description?: string
	content: string
}

const ContactSection = () => {
	return (
		<div
			id="contact"
			className=" h-screen  flex items-center flex-col-reverse lg:flex-row w-full bg-zicta-blue">
			<div className="basis-2/6  h-full py-16  flex flex-col px-4 lg:pl-10 ">
				<motion.div
					initial={{ x: -600, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2 }}
					className="flex flex-col justify-center h-full">
					<div className="">
						<h2 className=" text-xl md:text-3xl font-bold text-center  md:text-left  text-white pb-5">
							Get in touch
						</h2>
						<p className="text-white text-sm text-center  md:text-left  md:text-md">
							We’d love to hear from you! Our friendly team is always here to
							chat.{' '}
						</p>
					</div>
					<div className="space-y-6">
						{contactSideItems.map((item, index) => (
							<ContactSideItem key={index} {...item} />
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ x: -500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
					className="flex items-center justify-center
					">
					{/* Social Icons  */}
					{socialIcons.map((icon, index) => (
						<SocialIcon
							key={index}
							{...icon}
							className="mr-2"
							style={{ height: 40, width: 40 }}
						/>
					))}
				</motion.div>
			</div>
			<div className="basis-4/6 w-full h-full bg-white py-10 px-10 flex items-center justify-center flex-col ">
				<h2 className=" text-3xl md:text-4xl mb-1 text-center  md:mb-5 font-bold">
					You’ve got this far, Reach out.
				</h2>
				<p className="text-gray-400 text-sm text-center mb-5 md:mb-10 ">
					Fill in the form below and we’ll get back to you as soon as possible.
				</p>

				<ContactForm />
			</div>
		</div>
	)
}

const ContactSideItem: React.FC<contactSideItemProps> = ({
	title,
	description,
	content,
}) => {
	return (
		<div className="max-w-md py-5 min-h-[100px] space-y-2 text-center md:text-left ">
			<h2 className=" text-md md:text-xl font-medium text-white">{title}</h2>
			<div>
				<p className="text-white text-xs md:text-sm font-light">
					{' '}
					{description}
				</p>
				<p className="text-white text-xs md:text-sm font-medium"> {content} </p>
			</div>
		</div>
	)
}

export default ContactSection
