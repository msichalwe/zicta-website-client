'use client'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import axios from 'axios'
import { Stat } from '@prisma/client'
import { useRouter } from 'next/navigation'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const Stats = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['StatsData'],
		queryFn: () => fetch('/api/stats').then((res) => res.json()),
	})

	const router = useRouter()

	if (isLoading) return

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className=" flex items-center justify-between">
					<Heading title="Stats Section" description="Currently Published" />
					<Button
						onClick={() => router.push('/dashboard/home-page/stats/edit')}>
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
					<h3 className="text-2xl font-semibold">Stats</h3>
					<div className="grid md:grid-cols-3 gap-2">
						{data.stat.map((card: Stat) => (
							<div key={card.id}>
								<Card>
									<CardHeader>
										<CardTitle>{card.name}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-2xl font-medium">
											{card.value}
											{card.showPlus ? '+' : ''}
										</CardDescription>
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

export default Stats
