'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type WhatWeDoColumn = {
	id: string
	title: string
	description: string
	createdAt: string
}

export const columns: ColumnDef<WhatWeDoColumn>[] = [
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
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
