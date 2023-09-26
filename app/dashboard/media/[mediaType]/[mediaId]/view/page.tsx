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

const MediaClient = async ({
	params,
}: {
	params: { view: string; mediaId: string }
}) => {
	const media = await prisma.media.findUnique({
		where: {
			id: params.mediaId,
		},
		include: {
			category: true,
		},
	})

	const imageUrl = media?.imageUrl as string

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className="flex items-center justify-between">
					<Heading
						title={`${media?.title.toUpperCase()}`}
						description={`Preview of ${media?.title} `}
					/>
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Title:</p>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{media?.title}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className=" text-lg uppercase font-bold">description:</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">{media?.description}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Content:</p>
						</CardHeader>
						<CardContent className="content px-10">
							{/* @ts-ignore */}
							{Parser(media?.content)}
							{/* {media?.content} */}
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

export default MediaClient
