'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { ResourceColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'

interface ResourcesProps {
	data: ResourceColumn[]
}

const ResourcesClient: React.FC<ResourcesProps> = ({ data }) => {
	return (
		<>
			<Separator />
			<DataTable columns={columns} data={data} searchKey="title" />
		</>
	)
}

export default ResourcesClient
