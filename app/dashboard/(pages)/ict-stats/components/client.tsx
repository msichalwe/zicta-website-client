'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { ICTStatsColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ICTStatsProps {
	data: ICTStatsColumn[]
}

const ICTStatsClient: React.FC<ICTStatsProps> = ({ data }) => {
	const router = useRouter()
	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`ICT Statistics (${data.length})`}
					description={`Manage all the ICT Statistics here.`}
				/>
				<Button onClick={() => router.push('/dashboard/ict-stats/new')}>
					Add New <Plus size={16} />
				</Button>
			</div>
			<Separator />
			<DataTable columns={columns} data={data} searchKey="name" />
		</>
	)
}

export default ICTStatsClient
