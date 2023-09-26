'use client'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import axios from 'axios'
import { WhatWeDoCard } from '@prisma/client'
import { useRouter } from 'next/navigation'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const WhatWeDo = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['whatWeDoData'],
		queryFn: () => fetch('/api/what-we-do').then((res) => res.json()),
	})

	const router = useRouter()

	if (isLoading) return

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className=" flex items-center justify-between">
					<Heading
						title="What We Do Section"
						description="Currently Published"
					/>
					<Button
						onClick={() => router.push('/dashboard/home-page/what-we-do/edit')}>
						Update
					</Button>
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Title</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>{data.title}</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Description</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>{data.description}</CardDescription>
						</CardContent>
					</Card>

					<Separator />
					<h3 className="text-2xl font-semibold">What We Do Cards</h3>
					<div className="grid md:grid-cols-3 gap-2">
						{data.whatWeDoCard.map((card: WhatWeDoCard) => (
							<div key={card.id}>
								<Card>
									<CardHeader>
										<CardTitle>{card.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{card.content}</CardDescription>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhatWeDo
