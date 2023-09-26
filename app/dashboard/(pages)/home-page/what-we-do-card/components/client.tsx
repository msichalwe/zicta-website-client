'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { WhatWeDoColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/app/dashboard/components/Heading'

interface WhatWeDoProps {
	data: WhatWeDoColumn[]
}

const WhatWeDoClient: React.FC<WhatWeDoProps> = ({ data }) => {
	const router = useRouter()
	const params = useParams()
	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`What we do Card (${data.length})`}
					description={`Manage What we do Cards available on the platform`}
				/>
				<Button
					onClick={() =>
						router.push(
							`/dashboard/home-page/what-we-do-card/6e65772d70726f7065727479`,
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

export default WhatWeDoClient
