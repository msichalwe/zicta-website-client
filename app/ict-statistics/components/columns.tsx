'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StatsColumn = {
	id: string
	title: string
	file: string
	createdAt: string
}

export const columns: ColumnDef<StatsColumn>[] = [
	{
		accessorKey: 'title',
		header: 'Title',
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
