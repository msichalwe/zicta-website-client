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
								Apply for services to enrich your business
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Whether you need professional assistance or a simpler life, we
								have the perfect solution for you. Apply now and enhance your
								business with our top-notch services below
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 w-5/6 mx-auto gap-5 ">
						{cardData.map((item: CardProps) => (
							<div
								onClick={() =>
									router.push(
										`https://zicta-application-hub.vercel.app/dashboard/${encodeURIComponent(
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
	{
		title: 'Short Code',
		description:
			'Obtain your unique short code for streamlined access and interactions. Experience the ease of sharing and connecting with others effortlessly.',
		color: '#C6EBBE',
	},
	{
		title: 'Dealer Certificate',
		description:
			'Elevate your credentials with a prestigious Dealer Certificate. Join the league of certified professionals, backed by a legacy of expertise and excellence.',
		color: '#7CA5B8',
		bgColor: true,
	},
	{
		title: 'Domain',
		description:
			'Secure your online presence with a personalized domain. Establish your digital identity and showcase your content in a memorable and professional manner.',
		color: '#A9DBB8',
	},
]
