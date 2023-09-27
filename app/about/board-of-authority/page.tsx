'use client'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import { Balancer } from 'react-wrap-balancer'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import Loader from '@/components/ui/loader'

const BoardOfAuthority = () => {
	const { data, isLoading } = useSWR(`/api/about/board-of-authority`, fetcher)

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		)
	}

	return (
		<>
			<Navbar />
			<div className="flex gap-10 w-full flex-col ">
				<div className="bg-gradient-to-l p-10 mt-20 to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl text-center text-white font-medium">
						<Balancer>Board of the Authority</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-xs md:text-lg text-white">
						<Balancer></Balancer>
					</p>
				</div>
				<div className="min-h-screen mx-auto w-5/6">
					<div className="md:w-3/5 w-full space-y-5">
						<h2 className="text-4xl  bg-gradient-to-r from-zicta-blue  to-blue-400 bg-clip-text text-transparent font-bold">
							Our Distinguished Board of Directors
						</h2>
						<p className="text-lg ">
							<Balancer>
								Meet the guiding visionaries that are driving success within the
								Authority.
							</Balancer>
						</p>
					</div>
					<ul className="mx-auto my-20 grid max-w-2xl mb-10 gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 grid-cols-3 lg:mx-0 lg:max-w-none ">
						{data.map((person: any) => (
							<li
								key={person._id}
								className={` ${
									person.description === 'Chairperson' ||
									person.description === 'Authority Secretary'
										? 'col-span-3 '
										: ''
								} flex flex-col items-center`}>
								<img
									className="h-40 w-40 rounded-2xl object-cover border-2 border-zicta-yellow "
									src={person.imageUrl}
									alt=""
								/>
								<h3 className="mt-6 text-base font-semibold text-center text-gray-900">
									{person.name}
								</h3>

								<p className="text-base leading-7 text-center text-gray-600">
									{person.description}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default BoardOfAuthority
