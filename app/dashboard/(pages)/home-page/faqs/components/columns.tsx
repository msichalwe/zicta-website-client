'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type FaqColumn = {
	id: string
	question: string
	createdAt: string
}

export const columns: ColumnDef<FaqColumn>[] = [
	{
		accessorKey: 'question',
		header: 'Question',
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
