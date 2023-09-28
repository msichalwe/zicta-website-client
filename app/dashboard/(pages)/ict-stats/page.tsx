import React from 'react'
import ICTStatsClient from './components/client'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'

export const revalidate = 0

const ICTStats = async () => {
	const stats = await prisma.iCTStats.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	const formattedStats = stats.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			type: data.type,
			createdAt: formattedCreatedAt,
		}
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<ICTStatsClient data={formattedStats} />
			</div>
		</div>
	)
}

export default ICTStats
