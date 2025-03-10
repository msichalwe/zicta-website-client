import Heading from '@/app/components/Heading'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { format } from 'date-fns'
import { StatsColumn, columns } from '../components/columns'

const ISPStatistics = () => {
	const formattedResource: StatsColumn[] = stats.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			// @ts-ignore
			file: data.file.toUpperCase(),
			createdAt: formattedCreatedAt,
		}
	})

	return (
		<div className="gap-5">
			<div className="space-y-5">
				<Heading
					title="Internet Service Providers Statistics"
					description="Find all documents in relation to ISP statistics below."
				/>
				<Separator />
			</div>
			{/* <MyResponsiveBar /> */}
			<DataTable columns={columns} data={formattedResource} searchKey="title" />
		</div>
	)
}

export default ISPStatistics

const stats: Array<StatsColumn> = [
	{
		id: '1',
		title: 'ISP Statistics',
		file: '/isp-website-statistics-updates.xlsx',
		createdAt: '2024-09-01T00:00:00.000Z',
	},
]
