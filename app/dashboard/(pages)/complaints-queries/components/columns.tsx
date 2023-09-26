'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ComplaintsColumn = {
	id: string
	name: string
	subject: string
	createdAt: string
}

export const columns: ColumnDef<ComplaintsColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Names',
	},
	{
		accessorKey: 'subject',
		header: 'Subject',
	},
	{
		accessorKey: 'createdAt',
		header: 'Submitted At',
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
