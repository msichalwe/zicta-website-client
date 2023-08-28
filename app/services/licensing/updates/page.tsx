import getLicenseUpdates from '@/actions/getLicenseUpdates'
import Heading from '@/app/components/Heading'
import { ResourceColumn, columns } from '../updates/components/columns'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'
import React from 'react'

const Updates = async () => {
	const updates = await getLicenseUpdates()

	const formattedUpdates: ResourceColumn[] = updates.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			createdAt: formattedCreatedAt,
			format: data.fileType,
			file: data.file,
		}
	})

	return (
		<div className="gap-5">
			<div className="space-y-5">
				<Heading title="Licence Updates" description=" " />
				<Separator />
			</div>
			<DataTable
				columns={columns}
				data={formattedUpdates || []}
				searchKey="title"
			/>
		</div>
	)
}

export default Updates
