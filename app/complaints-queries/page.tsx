import React from 'react'
import ContactForm from '../components/contact-form'
import Heading from '../components/Heading'
import { Balancer } from 'react-wrap-balancer'

type ContactItem = {
	region: string
	office: string
	address: string
	boxNumber?: string
	location: string
	email?: string
	toll?: string
	phone?: string
}
const Complaints = () => {
	return (
		<div className=" flex w-full flex-col py-[10vh]">
			<div className="w-5/6 mx-auto">
				<div className="bg-peaks bg-no-repeat w-full bg-cover  h-full sm:min-h-[400px] min-h-[200px] rounded-xl mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-bold">
						<Balancer>Complaints & Queries</Balancer>
					</h1>
				</div>
				<Heading
					title="Submit Complaints & Queries."
					description=" Submit your complaints or queries in the form below "
				/>
				<div className="flex gap-5  md:gap-10 flex-col md:flex-row">
					<ContactForm />
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-10 ">
						{contacts.map((contact, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow-lg p-10 mb-10">
								<h1 className="text-md font-bold text-zicta-blue pb-2">
									{contact.region}
								</h1>
								<h1 className="text-xs font-bold text-zicta-blue pb=2">
									{contact.office}
								</h1>
								<p className="text-xs font-medium text-zicta-blue pb=2">
									{contact.address}
								</p>
								<p className="text-xs font-medium text-zicta-blue pb=2">
									{contact.boxNumber}
								</p>
								<p className="text-xs font-medium text-zicta-blue pb=2">
									{contact.location}
								</p>
								<p className="text-xs font-medium text-zicta-blue pb=2">
									{contact.email}
								</p>
								<p className="text-xs font-medium text-zicta-blue pb=2">
									{contact.toll}
								</p>
								<p className="text-xs font-medium text-zicta-blue pb=2">
									{contact.phone}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Complaints

const contacts: Array<ContactItem> = [
	{
		region: 'Lusaka',
		office: 'Head Office',
		address: 'Stand No. 4909, Corner of Independence & United Nations Avenues',
		boxNumber: 'PO Box 36871',
		location: 'Lusaka, Zambia',
		email: 'info@zicta.zm',
		toll: 'Toll Free: 7070',
		phone: 'Phone: +260 211 378 200',
	},
	{
		region: 'Copperbelt',
		office: 'Copperbelt Regional Office',
		address: 'Plot No. 2735 Liberia Road',
		location: 'Ndola, Zambia',
		phone: 'Phone: +260 212 651 032',
	},
	{
		region: 'Muchinga',
		office: 'Muchinga Regional Office',
		address: 'Plot No. 888 Nkakula Street',
		location: 'Chinsali, Zambia',
		phone: 'Phone: +260 211 378 244',
	},
	{
		region: 'Chipata',
		office: 'Chipata Regional Office',
		address: 'Plot No. 56, Bishop, John Osmers Office Complex, Church Road',
		location: 'Chipata, Zambia',
		phone: 'Phone: +260 211 378 246',
	},
	{
		region: 'Choma',
		office: 'Choma Regional Office',
		address: 'Plot No. 53031, JK Office Complex Corner of Hospital Road',
		location: 'Choma, Zambia',
		phone: 'Phone: +260 211 378 243',
	},
]
