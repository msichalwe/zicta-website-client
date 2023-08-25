import getServices from '@/actions/getServices'
import React from 'react'

const Licensing = async () => {
	const service = await getServices('licensing')
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10  ">
				<div className="flex items-start justify-center space-y-2  flex-col">
					<h1 className="text-3xl font-bold text-center">Licensing</h1>
					<p>{service.description}</p>
				</div>
				<div>
					<img
						src={service.imageUrl}
						alt="licensing"
						className="w-full h-full object-cover rounded"
					/>
				</div>
			</div>
			<div className="space-y-2 ">
				<p>
					Licence Categories One of the functions of the Authority is to issue
					licences in the ICT and Postal sectors, respectively. ICT Licence
					Categories In accordance with Section 10 (1) of the Information and
					Communication Technologies Act No 15 of 2009, the Authority issues the
					following licenses:
				</p>
				<ul className="list-disc list-inside">
					<li>
						Network Licence: Allows for the construction, owning or making
						available, an electronic communications network, or to provide a
						network service
					</li>
					<li>
						Service License: Allows for the provision of one or more electronic
						communications service
					</li>
				</ul>
				<p>
					The 2017 ICT Licensing Guidelines further categorise the Network and
					Service categories as follows:
				</p>
				<div className="space-y-2">
					<h2 className="text-lg font-medium">Licence Type</h2>
					<ul className="list-disc list-inside">
						<li>Network Licence</li>
						<li>Service (With Network) Licence - Category A</li>
						<li>Service (Without Network) Licence - Category B</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h2 className="text-lg font-medium">Market Segments</h2>
					<ul className="list-disc list-inside">
						<li>International National Provincial District</li>
						<li>National Provincial District</li>
						<li>National Provincial District</li>
					</ul>
				</div>
				<p>
					<strong>Note:</strong> Licenses are required to ensure that all
					submitted applications are in line with the provisions of the 2017
					Licensing Guidelines.
				</p>
				<p>
					Postal Licence Categories In accordance with Section (1) of the Postal
					Services Act No 22 of 2009, a person who intends to operate a reserved
					or unreserved postal service is required to apply for a licence to the
					Authority. In accordance with the Postal Services (General)
					Regulations, 2016, the Authority has the following licence categories:
				</p>
				<div className="space-y-2">
					<h2 className="text-lg font-medium">Public Postal Operators</h2>
					<ul className="list-disc list-inside">
						<li>International and Domestic Courier</li>
						<li>Domestic Courier</li>
						<li>Local Courier</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Licensing
