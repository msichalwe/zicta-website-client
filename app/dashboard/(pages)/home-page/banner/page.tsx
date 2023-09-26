'use client'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Banner = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['bannerData'],
		queryFn: () => fetch('/api/banner').then((res) => res.json()),
	})

	const router = useRouter()

	if (isLoading) return

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className=" flex items-center justify-between">
					<Heading title="Banner Section" description="Currently Published" />
					<Button
						onClick={() => router.push('/dashboard/home-page/banner/edit')}>
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
							<p className="font-medium">{data.title}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Subtitle</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{data.description}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Banner Image</CardTitle>
						</CardHeader>

						<CardContent>
							<div className="">
								<div className="relative w-full h-[400px] rounded-md overflow-hidden">
									<Image
										src={data.imageUrl}
										alt=""
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Banner
