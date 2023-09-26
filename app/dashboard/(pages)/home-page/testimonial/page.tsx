'use client'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Testimonial = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['testimonialData'],
		queryFn: () => fetch('/api/testimonial').then((res) => res.json()),
	})

	const router = useRouter()

	if (isLoading) return

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className=" flex items-center justify-between">
					<Heading
						title="Testimonial Section"
						description="Currently Published"
					/>
					<Button
						onClick={() =>
							router.push('/dashboard/home-page/testimonial/edit')
						}>
						Update
					</Button>
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Content</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{data.content}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Info</CardTitle>
						</CardHeader>

						<CardContent>
							<img
								className="mx-auto h-10 w-10 rounded-full"
								src={data.imageUrl}
								alt=""
							/>
							<div className="mt-4 flex items-center flex-col  justify-center space-x-3 text-base">
								<div className="font-semibold text-gray-900">{data.name}</div>

								<div className="text-gray-600">{data.title}</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
