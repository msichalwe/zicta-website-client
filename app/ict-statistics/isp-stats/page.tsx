import { columns } from '@/app/downloads/[resource]/components/columns'
import { DataTable } from '@/components/ui/data-table'
import React from 'react'

const ISPStats = () => {
	return (
		<div>
			<DataTable columns={columns} data={[]} searchKey="title" />
		</div>
	)
}

export default ISPStats
