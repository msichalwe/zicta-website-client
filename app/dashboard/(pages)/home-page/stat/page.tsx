import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import StatClient from './components/client'
import { StatColumn } from './components/columns'

const Stat = async () => {
	const stat = await prisma.stat.findMany()

	const formattedStat: StatColumn[] = stat.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			name: data.name,
			value: data.value,
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<StatClient data={formattedStat} />
			</div>
		</div>
	)
}

export default Stat
