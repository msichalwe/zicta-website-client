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

const Complaint = async ({ params }: { params: { complaintId: string } }) => {
	const complaint = await prisma.complaints.findUnique({
		where: {
			id: params.complaintId,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto max-w-6xl">
				<div className="flex items-center justify-between">
					<Heading
						title={`Complaint or Query`}
						description={`Preview of the submission `}
					/>
				</div>
				<Separator />

				<div className="flex flex-col space-y-4">
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Name</p>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{complaint?.name}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className="text-lg uppercase font-bold">Email Address</p>
						</CardHeader>
						<CardContent>
							<p className="font-medium">{complaint?.email}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className=" text-lg uppercase font-bold">Subject</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">{complaint?.subject}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<p className="text-xl uppercase font-bold">Phone Number</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">{complaint?.phone}</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<p className="text-xl uppercase font-bold">Message</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">{complaint?.message}</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Complaint
