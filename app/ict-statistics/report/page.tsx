import Heading from '@/app/components/Heading'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { format } from 'date-fns'
import { StatsColumn, columns } from '../components/columns'

const Report = () => {
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
					title="National ICT Survey Reports"
					description="Find all documents in relation to National ICT Survey Reports below"
				/>
				<Separator />
			</div>
			<DataTable columns={columns} data={formattedResource} searchKey="title" />
		</div>
	)
}

export default Report

const stats: Array<StatsColumn> = [
	{
		id: '1',
		title: '2022 National ICT Survey Report',
		file: '/ict-survey-reports/2022_Report.pdf',
		createdAt: '2022-12-01T00:00:00.000Z',
	},
	{
		id: '2',
		title: '2018 National ICT Survey Report',
		file: '/ict-survey-reports/2018_Report.pdf',
		createdAt: '2018-12-01T00:00:00.000Z',
	},
	{
		id: '3',
		title: '2015 National ICT Survey Report',
		file: '/ict-survey-reports/2015_Report.pdf',
		createdAt: '2015-12-01T00:00:00.000Z',
	},
]
