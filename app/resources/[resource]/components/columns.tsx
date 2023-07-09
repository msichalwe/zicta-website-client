'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ResourceColumn = {
	id: string
	resourceName: string
	createdAt: string
}

export const columns: ColumnDef<ResourceColumn>[] = [
	{
		accessorKey: 'resourceName',
		header: ' Title',
	},
	{
		accessorKey: 'createdAt',
		header: 'Published At',
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
