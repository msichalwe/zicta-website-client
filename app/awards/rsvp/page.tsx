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
			<div className="min-h-[80vh] bg-vote-bg bg-cover bg-no-repeat pb-20">
				<div className="relative isolate px-6 py-14 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div className="h-full w-full flex items-center justify-center md:order-1 order-last">
							<NominationForm />
						</div>
						<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
							<div className="hidden sm:mb-8 sm:flex sm:justify-center">
								<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-100 hover:ring-gray-100">
									RSVP now to secure your spot at the Inaugural ICT &
									Postal/Courier Sector Awards{' '}
								</div>
							</div>
							<div className="text-center">
								<h1 className="text-4xl font-bold tracking-tight text-gray-100 ">
									<Balancer>
										We officially invite you to the Inaugural ICT &
										Postal/Courier Sector Awards
									</Balancer>
								</h1>
								<p className="mt-6 leading-8 text-gray-100">
									Welcome to the Inaugural ICT & Postal/Courier Sector Awards!
									You are officially invited to celebrate excellence and
									innovation in the world of Information and Communication
									Technology, Postal, and Courier services.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<Link
										href="#learn-more"
										className="text-sm font-semibold leading-6 text-gray-100">
										Learn more <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-8 mt-5">
					<h1 className="text-2xl md:text-4xl font-bold text-center tracking-tight text-white  sm:text-5xl">
						Countdown to the Awards
					</h1>
					<Timer />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2  px-6 pt-14 lg:px-8 min-h-[80vh] h-full mt-10 md:mt-20">
					<div className=" h-full flex flex-col justify-center space-y-8 p-5 mx-auto w-full md:w-4/6">
						<h1
							id="learn-more"
							className="md:text-4xl text-2xl font-bold text-white ">
							About the Awards
						</h1>
						<p className="md:text-xl text-white">
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
								className="text-sm font-semibold leading-6 ml-4 text-gray-100">
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
