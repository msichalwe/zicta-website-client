import Heading from '@/app/components/Heading'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { format } from 'date-fns'
import { StatsColumn, columns } from '../components/columns'

const PSTNStatistics = () => {
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
					title="Public Switched Telephone Network Statistics"
					description="Find all documents in relation to PSTN statistics below."
				/>
				<Separator />
			</div>
			<DataTable columns={columns} data={formattedResource} searchKey="title" />
		</div>
	)
}

export default PSTNStatistics

const stats: Array<StatsColumn> = [
	{
		id: '1',
		title: 'Volume Statistics',
		file: '/pstn-website-statistics-updates-volume.xlsx',
		createdAt: '2024-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Employment Statistics',
		file: '/pstn-website-statistics-updates-employment.xlsx',
		createdAt: '2024-09-01T00:00:00.000Z',
	},

	{
		id: '1',
		title: 'Financials Statistics',
		file: '/pstn-website-statistics-updates-financials.xlsx',
		createdAt: '2024-09-01T00:00:00.000Z',
	},
	{
		id: '1',
		title: 'Interconnection Statistics',
		file: '/pstn-website-statistics-updates-interconnection.xlsx',
		createdAt: '2024-09-01T00:00:00.000Z',
	},
]
