'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Loader from '@/components/ui/loader'

interface CardProps {
	title: string
	description: string
	color: string
	bgColor?: boolean
}
const Apply = () => {
	const router = useRouter()

	return (
		<>
			<Navbar />
			<div className="min-h-screen mb-20 bg-apply bg-no-repeat bg-cover ">
				<div className="w-5/6 mx-auto">
					<div className="mx-auto max-w-4xl py-32 ">
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-zicta-blue sm:text-6xl">
								Unlock a world of online services with ZICTA
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Discover a world of digital solutions designed to enhance your
								experience. From expert guidance to streamlined services, we've
								got you covere
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto gap-5 ">
						{cardData.map((item: CardProps) => (
							<div
								onClick={() =>
									router.push(
										item.title === 'Domain'
											? 'https://whois.zicta.zm'
											: item.title === 'ICT Statistics Portal'
											? 'http://onlinesystems.zicta.zm:8585/statsfinal/'
											: item.title === 'ICT Databank'
											? 'https://databank.zicta.zm/'
											: item.title === 'Numbering System (Short codes)'
											? 'http://shortcodes.zicta.zm/nms/index.php'
											: `${
													process.env.NEXT_PUBLIC_APPLICATION_URL
											  }/dashboard/${encodeURIComponent(
													item.title.toLowerCase().replace(/[\s&]+/g, '-'),
											  )}`,
									)
								}
								key={item.title}
								style={{
									backgroundColor: item.color,
								}}
								className={` ${
									item.bgColor ? 'text-white' : 'text-gray-900'
								}  min-h-[20vh] flex justify-center items-start ease-in-out p-5 hover:scale-105 transition cursor-pointer  flex-col`}>
								<h1 className="font-medium uppercase">{item.title}</h1>
								<p className="text-sm">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Apply

const cardData: Array<CardProps> = [
	//{
	//	title: 'Dealer Certificate',
	//	description:
	//		'Elevate your credentials with a prestigious Dealer Certificate. Join the league of certified professionals, backed by a legacy of expertise and excellence.',
	//	color: '#7CA5B8',
	//	bgColor: true,
	//},
	{
		title: 'Domain',
		description:
			'Secure your online presence with a personalized domain. Establish your digital identity and showcase your content in a memorable and professional manner.',
		color: '#A9DBB8',
	},
	// {
	// 	title: 'ICT Statistics Portal',
	// 	description:
	// 		'Access the latest ICT statistics and reports from the Authority. Stay informed with the latest trends and developments in the ICT sector.',
	// 	color: '#C6EBBE',
	// },
	{
		title: 'ICT Databank',
		description:
			'Explore a comprehensive database of valuable resources and information in the field of Information and Communication Technology (ICT). Access reports, data, and insights essential for professionals and researchers in the ICT sector.',
		color: '#E2F9C0',
	},
	{
		title: 'Numbering System (Short codes)',
		description:
			'Simplify communication and engagement with short codes. Whether for marketing, customer support, or quick access to services, our numbering system streamlines interactions for an enhanced online experience.',
		color: '#F7A072',
	},
]
