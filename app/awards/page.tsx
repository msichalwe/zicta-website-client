import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Timer from './nomination/_components/countdown-timer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div className="h-full w-full flex items-center justify-center md:order-1 order-last">
							<video
								src={'/assets/awards-main.mp4'}
								autoPlay
								controls
								className="object-cover w-full md:h-[50%] h-full rounded "
							/>
						</div>
						<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
							<div className="hidden sm:mb-8 sm:flex sm:justify-center">
								<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
									Nominations for the ICT, Postal and Courier Awards are{' '}
									<span className="font-semibold text-zicta-blue">
										<span className="absolute inset-0" aria-hidden="true" />
										Closed
									</span>
								</div>
							</div>
							<div className="text-center">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Inaugural ICT & Postal/Courier Sector Awards
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									Welcome to the Inaugural ICT & Postal/Courier Sector Awards!
									It's time to celebrate excellence and innovation in the world
									of Information and Communication Technology, Postal, and
									Courier services.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<Button
										disabled={true}
										className="rounded-md bg-zicta-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zicta-blue">
										Nominations Closed
									</Button>
									<Link
										href="#learn-more"
										className="text-sm font-semibold leading-6 text-gray-900">
										Learn more <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
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
				<div className="space-y-8 mt-5">
					<h1 className="text-2xl md:text-4xl font-bold text-center tracking-tight text-zicta-blue sm:text-5xl">
						Countdown to the Awards
					</h1>
					<Timer />
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
							<Button
								disabled={true}
								className="rounded-md bg-zicta-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zicta-blue">
								Nominations Closed
							</Button>
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
