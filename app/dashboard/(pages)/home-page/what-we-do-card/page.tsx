import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import WhatWeDoCardClient from './components/client'
import { WhatWeDoColumn } from './components/columns'

const WhatWeDoCard = async () => {
	const whatWeDoCard = await prisma.whatWeDoCard.findMany()

	const formattedWhatWeDoCard: WhatWeDoColumn[] = whatWeDoCard.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			description: data.content,
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<WhatWeDoCardClient data={formattedWhatWeDoCard} />
			</div>
		</div>
	)
}

export default WhatWeDoCard
