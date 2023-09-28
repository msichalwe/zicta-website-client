'use client'
import React from 'react'
import Heading from '../../components/Heading'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Edit } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Parser from 'html-react-parser'
import getAbout from '@/actions/getAbout'

export const revalidate = 0
const AboutPage = () => {
	const router = useRouter()

	const { data, isLoading } = useQuery({
		queryKey: ['aboutData'],
		queryFn: async () => await getAbout(),
	})

	if (isLoading) return <div>Loading...</div>

	const imageUrl = data?.imageUrl as string
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<div className="flex items-center justify-between">
					<Heading
						title={`About Us`}
						description={`Manage the About Page on the platform`}
					/>
					<Button
						onClick={() =>
							router.push(`/dashboard/about/64b50d94117e8ddcabebc84c`)
						}>
						<Edit className="mr-2 h-4 w-4" />
						Edit
					</Button>
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Title:</p>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{data?.title}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className=" text-lg uppercase font-bold">description:</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">{data?.description}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Content:</p>
						</CardHeader>
						<CardContent className="content px-10">
							{/* @ts-ignore */}
							{Parser(data.content)}
							{/* {content} */}
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className="text-xl uppercase font-bold">Banner Image:</p>
						</CardHeader>
						<CardContent>
							<div className="relative w-full h-[400px] rounded-md overflow-hidden">
								<Image src={imageUrl} alt="" fill className="object-cover" />
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
