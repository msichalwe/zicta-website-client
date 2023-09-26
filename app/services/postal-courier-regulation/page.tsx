import getServices from '@/actions/getServices'
import Link from 'next/link'

const Postal = async () => {
	const service = await getServices('postal-courier')
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10  ">
				<div className="flex items-start justify-center space-y-2  flex-col">
					<h1 className="text-3xl font-bold text-center">
						Postal & Courier Regulation
					</h1>
					<p>{service?.description}</p>
					<p>
						The Authority has a mandate under the Postal Services Act of 2009,
						to regulate postal and courier services throughout the country.
						Postal services particularly refer to services offered by the Zambia
						Postal Corporation Services (ZAMPOST), which include transmission of
						letters, parcels, provision of Post Boxes and other such services.
						With respect to courier services, the Authority also regulates the
						commercial transmission of items under 30Kg across the country by
						privately owned courier operators
					</p>
				</div>
				<div>
					<img
						// @ts-ignore
						src={service?.imageUrl}
						alt="postal"
						className="w-full h-full max-h-96 object-cover rounded"
					/>
				</div>
			</div>
			<div className="space-y-2">
				<h2 className="text-2xl font-medium">
					Licensing of Postal and Courier Services
				</h2>
				<p>
					All entities that offer postal and courier services are required to
					obtain a license from the Authority. This includes motorcycle riders,
					bus companies and courier companies. The following are the types of
					license that may be obtained from the Authority for the purpose of
					conducting a postal or courier service:
				</p>
				<ul className="list-disc list-inside">
					<li>
						<span className="font-medium">Public Postal Operator: </span>
						This license is reserved for ZAMPOST as it carries obligations for
						the provision of postal services throughout the country and beyond
						borders
					</li>
					<li>
						<span className="font-medium">
							Domestic and International License:{' '}
						</span>
						This license allows operators to provide courier services throughout
						the country and internationally
					</li>
					<li>
						<span className="font-medium">Domestic License: </span>
						This license permits operators to provide courier services
						countrywide but not beyond Zambia’s borders
					</li>
					<li>
						<span className="font-medium">Local License: </span>
						This license permits operators to provide courier services within
						one district but not across districts.
					</li>
				</ul>
				<p className="text-lg font-medium">
					For more information on the types of licenses and their fees, click{' '}
					<Link
						href="/services/postal-courier/fees-types"
						className="cursor-pointer text-zicta-yellow">
						here
					</Link>
				</p>
				<p>
					Once licensed, and entity shall be considered as a legal provider and
					shall be able to offer services in a competitive environment under the
					Authority’s oversight and support. Postal and courier services offered
					will be recognized as credible by any existing or potential customers.
					Licensed operators will further have the opportunity to be heard by
					the Authority in times of dispute and to be a member of the Postal and
					Courier Association of Zambia (PCAZ) which presents the needs of
					operators to the Authority. The Authority periodically publishes a
					list of all licensed operators for the benefit of customers who would
					like to access the service. This list can be accessed using the
					following link:{' '}
					<Link
						className="cursor-pointer font-medium text-zicta-yellow "
						href="/services/postal-courier/registry">
						Registry
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Postal
