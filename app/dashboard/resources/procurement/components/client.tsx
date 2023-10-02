'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { ProcurementColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/app/dashboard/components/Heading'

interface ProcurementProps {
	data: ProcurementColumn[]
}

const ProcurementClient: React.FC<ProcurementProps> = ({ data }) => {
	const router = useRouter()
	const params = useParams()
	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`Procurements (${data.length})`}
					description="Manage procurements available on the platform"
				/>
				<Button
					onClick={() =>
						router.push(
							`/dashboard/resources/procurement/6e65772d70726f7065727479`,
						)
					}>
					<Plus className="mr-2 h-4 w-4" />
					Add New
				</Button>
			</div>
			<Separator />
			<DataTable columns={columns} data={data} searchKey="title" />
		</>
	)
}

export default ProcurementClient