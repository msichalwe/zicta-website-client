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

interface CardProps {
	title: string
	description: string
	imageUrl: string
}
const Apply = () => {
	const router = useRouter()
	return (
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
				<div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto gap-5 ">
					{cardData.map((card: CardProps) => (
						<Card
							className="rounded-xl text-white relative aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden"
							style={{ backgroundImage: `url(${card.imageUrl})` }}>
							<div className="absolute inset-0 bg-black opacity-50"></div>
							<div className="absolute text-white flex flex-col justify-between h-full">
								<CardHeader>
									<CardTitle className="text-4xl">{card.title}</CardTitle>
								</CardHeader>
								<CardContent>{card.description}</CardContent>
								<CardFooter>
									<Button className="bg-transparent border cursor-not-allowed border-white rounded-none hover:bg-white hover:text-black ">
										Coming Soon
									</Button>
								</CardFooter>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Apply

const cardData: Array<CardProps> = [
	{
		title: 'Short Code',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		imageUrl:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
	},
	{
		title: 'Dealer Certificate',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		imageUrl:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
	},
	{
		title: 'Spectrum',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		imageUrl:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
	},
	{
		title: 'Domain Name',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		imageUrl:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
	},
	{
		title: 'Site Survery',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		imageUrl:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
	},
]
