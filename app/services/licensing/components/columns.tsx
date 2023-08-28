'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LicensesColumn = {
	id: string
	title: string
	file: string
}

export const columns: ColumnDef<LicensesColumn>[] = [
	{
		accessorKey: 'title',
		header: 'Title',
	},

	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
