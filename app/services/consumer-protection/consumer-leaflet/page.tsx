'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

const ConsumerLeaflet = () => {
	const router = useRouter()
	return (
		<div className="space-y-8 ">
			<div>
				<h2 className="text-xl font-medium">
					The Act mandates the Authority to:
				</h2>
				<p>
					Promote the interests of consumers, purchasers and other users of
					telecommunications services (including in particular those who are
					disabled or of pensionable age) in respect of the prices charged, the
					quality and variety of such services.
				</p>
			</div>
			<div>
				<h2 className="text-xl font-medium">
					What are your rights as a consumer?
				</h2>
				<p className="">
					<Balancer>
						Some of your rights are enshrined in the service agreement entered
						into between yourself and the service provider. Ensure that you read
						and understand the agreement before you sign it. The service
						agreement may also be enshrined in conditions of sale in a SIM pack
						for the pre-paid customers. However, there are a number of rights
						which may not be contained in the service agreements and these
						include: Disclosure: You have a right to receive clear, conspicuous
						and complete information about rates and conditions for available
						and proposed products and services from service providers. Choice:
						You have a right to affirmatively select a telecommunication
						provider and services. Privacy: You have lawful choice to personal
						privacy which should be protected against unauthorized access to or
						use of personal conversation or information. High Quality, reliable
						service: You have a right to high quality, reliable service. Timely,
						accurate bills and redress: You have a right to accurate and
						understandable bills for services consumed and to fair, prompt
						redress for problems related to bills or that may arise during the
						use of services. Emergency services: You have a right to call
						emergency services toll free. Market abuse: You have a right to be
						protected from market abuses such as unfair trade practices,
						including false and misleading advertising and anti-competitive
						behavior. Making complaints: You have a right to lodge a complaint
						with your provider and receive a satisfactory response. If you are
						not happy with the response you have a right to report the provider
						to the Authority.
					</Balancer>
				</p>
			</div>
			<div className="space-y-5 ">
				<div className="">
					<h2 className="text-xl  font-medium">
						How do you complain to the Authority?
					</h2>
					<p className="">
						First step before you complain to the Authority, complain to your
						service provider first. It is advisable that you do this in writing
						so that you have a record for yourself. After receiving a response
						if you are not happy with it, then can you complain to the
						Authority. Second step Visit, write or call the Authority to
						register your complaint. All verbal complaints should be followed by
						a physical visit or a written detailed complaint so that it is fully
						understood. The manner in which a complaint is lodged will highly be
						dependent on the nature of the complaint. For example complaints
						related to poor quality of service in a certain area can be made
						over the telephone while those related to billing should be written
						and supported by documentary proof.
					</p>
				</div>
				<div>
					<h3 className="font-medium ">
						Your written complaint should bear the following information:
					</h3>
					<ul className="list-disc list-inside">
						<li>Full names</li>
						<li>Contact address</li>
						<li>Contact telephone</li>
						<li> Email address or fax numbers</li>
						<li>
							We also request that you attach all the relevant documents related
							to your case.
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-medium">FEEDBACK TO YOUR COMPLAINT</h3>
					<p>
						You should ensure that you receive a feedback to your complaint
						within <strong>fourteen (14) working days</strong> of filling the
						complaint.
					</p>
				</div>
				<div>
					<h3 className="font-medium">WHERE TO YOU LODGE A COMPLAINT?</h3>
					<p>
						Fill in the complaints form online.{' '}
						<span
							className="font-medium cursor-pointer"
							onClick={() => router.push('/complaints-queries')}>
							Here
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ConsumerLeaflet
