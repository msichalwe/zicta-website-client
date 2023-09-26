'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { ComplaintsColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/app/dashboard/components/Heading'

interface ComplaintsProps {
	data: ComplaintsColumn[]
}

const ComplaintsClient: React.FC<ComplaintsProps> = ({ data }) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`Complaints & Queries (${data.length})`}
					description={`Manage all the Complaints and Queries submitted on the platform`}
				/>
			</div>
			<Separator />
			<DataTable columns={columns} data={data} searchKey="name" />
		</>
	)
}

export default ComplaintsClient
