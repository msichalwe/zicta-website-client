'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MediaColumn = {
	id: string
	title: string
	description: string
	createdAt: string
	category: string
}

export const columns: ColumnDef<MediaColumn>[] = [
	{
		accessorKey: 'title',
		header: 'Post Title',
	},
	{
		accessorKey: 'description',
		header: 'Post Description',
	},
	{
		accessorKey: 'createdAt',
		header: 'Published At',
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
