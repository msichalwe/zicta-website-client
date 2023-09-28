import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import ResourceClient from './components/client'
import { ResourceColumn } from './components/columns'

export const revalidate = 0

const Resource = async ({ params }: { params: { resource: string } }) => {
	const resource = await prisma.resource.findMany({
		where: {
			type: params.resource,
		},
	})

	const formattedResource: ResourceColumn[] = resource.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			format: data.fileType.toUpperCase(),
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<ResourceClient data={formattedResource} />
			</div>
		</div>
	)
}

export default Resource
