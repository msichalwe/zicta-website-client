import React from 'react'

const page = () => {
	return (
		<div className="space-y-4 px-10 md:px-0">
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
				<div className="flex items-start justify-center space-y-2 flex-col ">
					<h1 className="text-4xl font-medium">Consumer Responsibilities</h1>
					<p>
						The Zambia Information & Communications Authority (ZICTA) is an
						independent body established by the ICT Act of 2009 and the Postal
						Services Act of 2009. Its role is to oversee Information and
						Communication Technologies (ICTs) and postal services in Zambia,
						ensuring fair access, consumer protection, and service provider
						accountability.
					</p>
					<h2 className="font-medium text-xl mt-10">Mandate</h2>
					<p>
						ZICTA's authority includes regulating ICT and postal services,
						facilitating access to these services, and safeguarding the rights
						of consumers and service providers. It's empowered by the law to
						protect the interests of vulnerable groups, like individuals with
						disabilities and the elderly.
					</p>
				</div>
				<div>
					<img
						src={'/assets/logo.png'}
						alt="identity-theft-image"
						className="w-full h-full max-h-[400px] object-contain rounded"
					/>
				</div>
			</div>

			<div className="">
				<h2 className="font-medium text-xl mb-2">
					Consumer Obligations for ICT Services
				</h2>
				<ul className="list-disc list-inside space-y-2">
					<li>
						<strong>Prompt Payment:</strong> Consumers are required to pay their
						service bills as outlined in agreements/contracts.
					</li>
					<li>
						<strong>Proper Use:</strong> Consumers must use services, products,
						and equipment responsibly and lawfully. They should not share
						unlawful or harmful content and must comply with network rules.
					</li>
					<li>
						<strong>Awareness:</strong> Consumers should gather information
						about services, including alternatives, especially regarding
						promotions and terms.
					</li>
					<li>
						<strong>Complaints and Claims:</strong> It's the duty of consumers
						to raise genuine complaints or claims, initially with the service
						provider and if unsatisfied, with ZICTA.
					</li>
					<li>
						<strong>Environmental Responsibility:</strong> Consumers should
						dispose of waste from ICT services responsibly to protect the
						environment.
					</li>
					<li>
						<strong>Assertiveness:</strong> Consumers are encouraged to voice
						concerns and weaknesses in services, promoting sector improvement.
					</li>
					<li>
						<strong>Courteous Interaction:</strong> When interacting with
						operators or lodging complaints, consumers are expected to maintain
						politeness and avoid using abusive language.
					</li>
					<li>
						<strong>Privacy Respect:</strong> Consumers should respect the
						privacy of other users of ICT and postal services.
					</li>
					<li>
						<strong>Protection of Community Facilities:</strong> Consumers are
						obligated to report vandalism or abuse of ICT infrastructure to law
						enforcement agencies.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default page
