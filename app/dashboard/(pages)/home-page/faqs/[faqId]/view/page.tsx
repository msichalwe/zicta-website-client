import Heading from '@/app/dashboard/components/Heading'

import { Separator } from '@/components/ui/separator'

import React from 'react'
import prisma from '@/lib/prismadb'

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

const FaqClient = async ({ params }: { params: { faqId: string } }) => {
	const faq = await prisma.faq.findUnique({
		where: {
			id: params.faqId,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className="flex items-center justify-between">
					<Heading title={`FAQ`} description={`Preview of FAQ`} />
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Question:</p>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{faq?.question}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Answer:</p>
						</CardHeader>
						<CardContent className="content px-10">
							{/* @ts-ignore */}
							{Parser(faq?.answer)}
							{/* {faq?.content} */}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default FaqClient
