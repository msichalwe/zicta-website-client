'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SubServicesColumn = {
	id: string
	title: string
	description: string
	createdAt: string
	service: string
}

export const columns: ColumnDef<SubServicesColumn>[] = [
	{
		accessorKey: 'title',
		header: 'Title',
	},
	{
		accessorKey: 'description',
		header: 'Description',
	},
	{
		accessorKey: 'createdAt',
		header: 'Published At',
	},
	{
		accessorKey: 'service',
		header: 'Service',
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
