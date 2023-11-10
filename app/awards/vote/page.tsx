import Link from 'next/link'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import Timer from './nomination/_components/countdown-timer'
import Image from 'next/image'
import NominationForm from './nomination-form'
import Balancer from 'react-wrap-balancer'




const Awards = () => {
	
	return (
		<>
			<Navbar />
			<div className="min-h-[80vh] bg-slate-100 pb-20">
				<div className="relative isolate px-6 py-14 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true">
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-1 gap-2">
					<div className="mx-auto max-w-3xl py-6 sm:py-6 lg:py-6">
						
							<div className="text-center">
								<h1 className="relative text-4xl rounded-full font-bold tracking-tight text-zicta-blue sm:text-5xl md:ring-1 md:ring-gray-900/10 md:hover:ring-gray-900/20 lg:ring-1 lg:ring-gray-900/10 lg:hover:ring-gray-900/20 p-2 mt-3">
									<Balancer>
										We officially invite you to vote in the Inaugural ICT & Postal/Courier Sector Awards
									</Balancer>
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl">
								Welcome to the Inaugural Awards for Excellence and Innovation in the ICT & Postal/Courier Sector! You are officially invited to join us in celebrating outstanding achievements and voting for your favorites in the fields of Information and Communication Technology, Postal, and Courier services.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
								
									<Link
										href="#learn-more"
										className="text-sm font-semibold leading-6 text-gray-900">
										Learn more <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-1 gap-2">
					<NominationForm

							
						/>
					</div>
					
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true">
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2  px-6 pt-14 lg:px-8 min-h-[80vh] h-full mt-10 md:mt-20">
					<div className=" h-full flex flex-col justify-center space-y-8 p-5 mx-auto w-full md:w-4/6">
						<h1
							id="learn-more"
							className="md:text-4xl text-2xl font-bold text-zicta-blue">
							About the Awards
						</h1>
						<p className="md:text-xl">
							The Awards are aimed at incentivizing improved regulatory outcomes
							in both the ICT and Postal and Courier Services sectors as well as
							recognizing the contributions of individuals and organizations
							that have made significant contributions to the growth and
							development of the sector
						</p>
						<div className="mt-10  gap-x-6">
							<Link
								href="/awards/nomination"
								className="rounded-md bg-zicta-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zicta-blue">
								Awards
							</Link>
							<Link
								href="/awards/about"
								className="text-sm font-semibold leading-6 ml-4 text-gray-900">
								Read more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					<div>
						<img
							src="/assets/trophy.jpg"
							className="h-full w-full md:w-5/6 object-cover rounded-md"
							alt="awards"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Awards
