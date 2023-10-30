import React from 'react'
import prisma from '@/lib/prismadb'
import { format } from 'date-fns'
import ResourcesClient from './components/client'
import { ResourceColumn } from './components/columns'

export const revalidate = 0

const Registers = async () => {
	const registers = await prisma.licenceFiles.findMany({
		where: {
			type: 'register',
		},
	})

	const formattedRegisters: ResourceColumn[] = registers.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			createdAt: formattedCreatedAt,
			format: data.fileType,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<ResourcesClient data={formattedRegisters} />
			</div>
		</div>
	)
}

export default Registers
