import React from 'react'

import prisma from '@/lib/prismadb'
import { StatsForm } from './components/stats-form'

const EditPage = async () => {
	const stats = await prisma.stats.findUnique({
		where: {
			id: '64ae804bdc8bac9481e7e582',
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<StatsForm initialData={stats} />
			</div>
		</div>
	)
}

export default EditPage
