import React from 'react'

import prisma from '@/lib/prismadb'
import { StatForm } from './components/stat-form'

const StatPage = async ({ params }: { params: { statId: string } }) => {
	const stat = await prisma.stat.findUnique({
		where: {
			id: params.statId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<StatForm initialData={stat} />
			</div>
		</div>
	)
}

export default StatPage
