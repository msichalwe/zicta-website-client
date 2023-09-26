import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import React from 'react'
import prisma from '@/lib/prismadb'
import ClientButton from './components/client'
import Parser from 'html-react-parser'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const ServiceClient = async ({
	params,
}: {
	params: { serviceType: string }
}) => {
	const service = await prisma.service.findUnique({
		where: {
			type: params.serviceType,
		},
		include: {
			subServices: true,
		},
	})

	const imageUrl = service?.imageUrl as string

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className="flex items-center justify-between">
					<Heading
						title={`${params.serviceType.toUpperCase()}`}
						description={`Manage this service`}
					/>
					<ClientButton id={service?.id} />
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Title:</p>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{service?.title}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className=" text-lg uppercase font-bold">description:</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">{service?.description}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Content:</p>
						</CardHeader>
						<CardContent className="content px-10">
							{/* @ts-ignore */}
							{Parser(service?.content)}
							{/* {service?.content} */}
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

export default ServiceClient
