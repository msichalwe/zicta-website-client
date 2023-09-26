'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ICTStatsColumn = {
	id: string
	title: string
	type: string
	createdAt: string
}

export const columns: ColumnDef<ICTStatsColumn>[] = [
	{
		accessorKey: 'title',
		header: 'Title',
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'createdAt',
		header: 'Uploaded At',
	},

	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
