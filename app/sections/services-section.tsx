'use client'
import getAllServices from '@/actions/getAllServices'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const ServicesSection = () => {
	const { data: services, isLoading } = useQuery({
		queryKey: ['servicesData'],
		queryFn: getAllServices,
	})

	const router = useRouter()

	return (
		<div className="bg-white py-24 sm:py-32" id="what-we-do">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center mb-10">
					<motion.h2
						className="text-base font-semibold leading-7 text-zicta-blue"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.2 }}>
						services
					</motion.h2>
					<motion.p
						className="mt-2 text-3xl font-bold tracking-tight text-zicta-blue sm:text-4xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.4 }}>
						Where Would You Like To Go?
					</motion.p>
				</div>

				<div className="grid grid-cols-3 gap-5">
					{services?.map((service) => (
						<Card
							key={service.id}
							className="rounded cursor-pointer relative aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden"
							style={{ backgroundImage: `url(${service.imageUrl})` }}>
							{/* Black overlay */}
							<div className="absolute inset-0 bg-black opacity-50"></div>

							<div className="absolute text-white flex flex-col justify-between h-full">
								<CardHeader>
									<CardTitle className="text-white text-lg text-center md:text-2xl ">
										{service.title}
									</CardTitle>
								</CardHeader>

								<CardFooter className=" text-white">
									<Button
										size={'sm'}
										className="bg-transparent border border-white py-2 px-4 text-sm rounded-none hover:bg-white hover:text-black "
										onClick={() =>
											router.push(
												`/services/${service.title
													.toLowerCase()
													.replace(/[\s&]+/g, '-')}`,
											)
										}>
										Learn More
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

export default ServicesSection
