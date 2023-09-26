import React from 'react'
import ContactForm from '../components/contact-form'
import Heading from '../components/Heading'
import { Balancer } from 'react-wrap-balancer'
import Navbar from '@/app/components/navbar'
import Footer from '../components/footer'

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
		<>
			<Navbar />
			<div className=" flex w-full flex-col">
				<div className="bg-peaks bg-no-repeat w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>Complaints & Queries</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-lg text-center text-white">
						<Balancer>
							We value your opinions and are here to listen. Whether you have
							concerns to address or questions to ask, this is the place to
							express yourself. Your feedback helps us improve and provide you
							with better service.
						</Balancer>
					</p>
				</div>
				<div className="w-5/6 mx-auto">
					<Heading
						title="Submit Complaints & Queries"
						description=" Submit your complaints or queries in the form below "
					/>
					<div className="grid grid-cols-2 gap-10">
						<ContactForm />
						<div className="bg-customer-care bg-cover bg-no-repeat h-full w-full rounded-lg"></div>
					</div>
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
			<Footer />
		</>
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
