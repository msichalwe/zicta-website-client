import Heading from '@/app/components/Heading'
import { columns } from '@/app/downloads/[resource]/components/columns'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import MyResponsiveBar from '../components/mno-chart'

const MNOStatistics = () => {
	return (
		<div className="gap-5">
			<div className="space-y-5">
				<Heading
					title="Mobile Network Operator Statistics"
					description="Find all documents in relation to mobile network operator Statistics below."
				/>
				<Separator />
			</div>
			<MyResponsiveBar />
			{/* <DataTable columns={columns} data={[]} searchKey="title" /> */}
		</div>
	)
}

export default MNOStatistics
