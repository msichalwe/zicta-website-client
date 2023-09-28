import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import ProcurementClient from './components/client'
import { ProcurementColumn } from './components/columns'

export const revalidate = 0

const Procurement = async ({ params }: { params: { procurement: string } }) => {
	const procurement = await prisma.procurement.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	const formattedProcurement: ProcurementColumn[] = procurement.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			type: data.type.toUpperCase(),
			format: data.fileType.toUpperCase(),
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<ProcurementClient data={formattedProcurement} />
			</div>
		</div>
	)
}

export default Procurement
