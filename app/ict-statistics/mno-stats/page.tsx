import Heading from '@/app/components/Heading'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import MyResponsiveBar from '../components/mno-chart'
import { format } from 'date-fns'
import { StatsColumn, columns } from '../components/columns'

const MNOStatistics = () => {
	const formattedResource: StatsColumn[] = stats.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
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
					title="Mobile Network Operator Statistics"
					description="Find all documents in relation to MNO statistics below."
				/>
				<Separator />
			</div>

			<DataTable columns={columns} data={formattedResource} searchKey="title" />
		</div>
	)
}

export default MNOStatistics

const stats: Array<StatsColumn> = [
	{
		id: '1',
		title: 'Volume Statistics',
		file: '/mno-stats/MNO-Volume-Statistics-Updates.xlsx',
		createdAt: '2021-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Revenue Statistics',
		file: '/mno-stats/MNO-Revenue-Statistics-Updates.xlsx',
		createdAt: '2021-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Interconnection Traffic Statistics',
		file: '/mno-stats/MNO-Interconnection-Updates.xlsx',
		createdAt: '2021-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Employment Statistics',
		file: '/mno-stats/MNO-Employment-Statistics-Updates.xlsx',
		createdAt: '2021-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Network Coverage Statistics',
		file: '/mno-stats/MNO-Network-Statistics-Updates.xlsx',
		createdAt: '2021-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Mobile Tariffs Statistics',
		file: '/mno-stats/MNO-Mobile-Statistics-Updates.xlsx',
		createdAt: '2021-09-01T00:00:00.000Z',
	},
]
