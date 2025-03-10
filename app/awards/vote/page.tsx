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
			<div className="min-h-[80vh] bg-vote-bg bg-no-repeat bg-cover pb-20">
				<div className="relative isolate px-6 py-24 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-1 gap-2">
						<div className="mx-auto max-w-3xl py-6 sm:py-6 lg:py-6">
							<div className="text-center">
								<h1 className="relative text-4xl rounded-full font-bold tracking-tight text-white   p-2 mt-3">
									<Balancer>
										We officially invite you to vote for the Inaugural ICT, POSTAL AND COURIER AWARDS 
									</Balancer>
								</h1>
								<p className="mt-6 leading-8 text-gray-100 max-w-3xl">
									Welcome to the Inaugural Awards for Excellence and Innovation
									in the ICT, Postal and Courier Sector! You are officially invited
									to join us in voting
									for your favorites in the fields of Information and
									Communication Technology, Postal, and Courier services.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<Link
										href="#learn-more"
										className="text-sm font-semibold leading-6 text-gray-900">
										About the Awards <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-1 gap-2">
						<NominationForm />
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
			</div>
			<Footer />
		</>
	)
}

export default Awards
