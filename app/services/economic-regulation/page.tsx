import getServices from '@/actions/getServices'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import Balancer from 'react-wrap-balancer'

const EconomicRegulation = async () => {
	const service = await getServices('economic-regulation')
	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col my-10">
				<div className="bg-gradient-to-l  mt-10 md:mt-0 to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px] flex items-center justify-center">
					<h1 className="sm:text-4xl text-3xl  text-white font-medium">
						<Balancer>{service.title}</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-sm text-white"></p>
				</div>
			</div>
			<div className="w-5/6 mx-auto mb-10">
				<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10  ">
					<div className="flex items-start justify-center space-y-2  flex-col">
						<h1 className="text-3xl font-bold text-center">{service.title}</h1>
						<p>{service.description}</p>
					</div>
					<div>
						<img
							src={service.imageUrl}
							alt="postal"
							className="w-full h-full max-h-96 object-cover rounded"
						/>
					</div>
				</div>
				<div className="space-y-3">
					<h2 className="text-3xl font-bold">Markets and Competition Unit</h2>
					<p>
						The Unit seeks to promote effective competition in the ICT sector
						through regulation of access to critical infrastructure as well as
						regulation of tariffs (pricing) and market conduct to achieve
						efficient commercial and regulatory outcomes. Specifically, the Unit
						is responsible inter-alia for ensuring that tariffs for all
						electronic communication services are efficiently formulated, cost
						oriented, transparent and non-discriminatory in order to safeguard
						the interests of end-users of ICT products and services as well to
						enable licensees generate a reasonable return on investment. In
						order to effectively regulate tariffs for electronic communication
						services, the Unit has developed a series of Next Generation Network
						(NGN) cost models to analyze the financial/cost structure of market
						players at both wholesale and retail market levels to ascertain the
						true cost of providing services in a converged and NGN environment.
						<br />
					</p>
					<p>
						In order to safeguard the commercial interest of all market players,
						the department strives to ensure that there is a level playing field
						for licensees in the ICT sector. To this end, the department
						undertakes market reviews to systematically identify relevant
						markets as well as determine which market players hold positions of
						market power or dominance in each respective market. This
						determination provides the basis upon which either ex-ante or
						ex-post regulatory measures are applied to promote and safeguard
						competition in the market.
					</p>
					<h2 className="text-3xl mt-10 font-bold ">Postal Unit</h2>
					<p>
						Part II Section 3 of the Postal Services Act No.22 of 2009 places a
						mandate on ZICTA to regulate postal services in Zambia. In addition
						to the regulation of the sector, ZICTA also has the responsibility
						of facilitating investment in the postal sector. ZICTA has the
						following specific functions with respect to the postal sector:
					</p>
					<ul className="list-disc list-inside">
						<li>
							Licence providers of postal and courier services and facilitate
							the provision of a wide range services in the postal sector;
						</li>
						<li>
							Encourage and promote the advancement in the provision of postal
							and courier services;
						</li>
						<li>
							Stimulate and ensure fair competition in the provision of postal
							services;
						</li>
						<li>
							Promote universal access to affordable postal and courier
							services;
						</li>
						<li>
							Resolve disputes in collaboration agreements in the postal and
							courier sector.
						</li>
					</ul>
					<p>
						ZICTA also has the responsibility of collaborating with other
						institutions to implement the Postal Policy of 2020. This is for the
						purpose of ensuring a properly synchronised and functional postal
						value chain that is able to deliver quality, secure and efficient
						postal and courier services. The collaborations are not limited to
						local institutions but extend to regional and international
						organisations that facilitate for the continuous flow of various
						postal items.
					</p>
					<p>
						ZICTA further has a mandate of managing postcodes in Zambia.
						Postcodes serve to increase the efficiency of mail deliveries
						countrywide and are governed through the Postcode Regulations of
						2017.
					</p>
					<h2 className="text-3xl font-bold">Policy and Research Unit</h2>
					<p>
						The Policy and research unit is established to provide evidence that
						would support the regulatory decisions of the Authority. Part II
						Section 6(2) (h) of the Information and Communications Technology
						Act No. 15 of 2009 mandates ZICTA to promote research, development
						and manufacturing of relevant and appropriate technologies and
						apparatus in Zambia. Further, in Part XI Section 90 of the Act,
						ZICTA is mandated to collect information on the sector to better
						undertake its regulatory functions. The aforementioned functions
						have been fully operationalized under the Research and Policy Unit
						of the Economic regulation Department of ZICTA. The Unit has the
						following specific functions:
					</p>
					<ul className="list-disc list-inside">
						<li>
							Promotes and undertake research in various issues affecting the
							ICT sector;
						</li>
						<li>
							Collection, management and dissemination of administrative and
							demand side data on the ICT and Postal sector;
						</li>
						<li>
							Promote investment and Trade related initiatives in the ICT
							sector;
						</li>
						<li>
							Support the development of polices and other government related
							strategies affecting the ICT sector; and
						</li>
						<li>
							Facilitate the growth and development of ICT related innovations
							and entrepreneurship among targeted groups.
						</li>
					</ul>
					<p>
						The unit has in the last few years undertaken various demand side
						surveys such as the 2013, 2015 and 2018 National ICT surveys as well
						as various research and studies to support the regulatory decisions
						of the Authority. In addition, the ICT innovation programme which
						aims to support emerging and early stage innovations and start-ups
						is coordinated in the unit. The unit also manages a comprehensive
						database of administrative statistics aimed at tracking the
						performance of the sector. Further, the policy and research unit
						leads most of the work on trade related negotiations on bilateral,
						regional and multilateral arrangements including the development of
						key input for strategic national initiatives such as the national
						budgets, national development plans and sector specific policies.
					</p>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default EconomicRegulation
