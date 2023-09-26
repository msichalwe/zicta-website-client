import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import SubServiceClient from './components/client'
import { SubServicesColumn } from './components/columns'

const SubService = async ({
	params,
}: {
	params: { subServiceType: string }
}) => {
	const subService = await prisma.subService.findMany({
		include: {
			service: true,
		},
	})

	const formattedSubService: SubServicesColumn[] = subService.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			description: data.description,
			createdAt: formattedCreatedAt,
			service: data.service.title,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<SubServiceClient data={formattedSubService} />
			</div>
		</div>
	)
}

export default SubService
