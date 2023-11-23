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

export const revalidate = 0

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
					<p>General Information</p>
					<div className="grid grid-cols-3 gap-2">
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
								<p className="text-xl uppercase font-bold">Phone Number</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.phone}</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<p className=" text-lg uppercase font-bold">Mobile Operator</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.operator}</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<p className=" text-lg uppercase font-bold">Gender</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.gender}</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<p className=" text-lg uppercase font-bold">Age</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.age}</p>
							</CardContent>
						</Card>
					</div>
					<p>Location</p>
					<div className="grid grid-cols-3 gap-2">
						<Card>
							<CardHeader>
								<p className="text-xl uppercase font-bold">Area</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.area}</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<p className="text-xl uppercase font-bold">District</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.district}</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<p className="text-xl uppercase font-bold">Province</p>
							</CardHeader>
							<CardContent>
								<p className=" font-medium">{complaint?.province}</p>
							</CardContent>
						</Card>
					</div>
					<Card>
						<CardHeader>
							<p className="text-xl uppercase font-bold">Subject</p>
						</CardHeader>
						<CardContent>
							<p className=" font-medium">
								{complaint?.subject === 'other'
									? complaint?.other
									: complaint?.subject}
							</p>
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
