'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ManagementColumn = {
	id: string
	name: string
	description: string
	createdAt: string
	imageUrl: string
}

export const columns: ColumnDef<ManagementColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'description',
		header: 'Description',
	},
	{
		accessorKey: 'createdAt',
		header: 'Published At',
		cell: ({ row }) => (
			<span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
		),
	},
	{
		accessorKey: 'imageUrl',
		header: 'Image',
		cell: ({ row }) => (
			<img
				src={row.original.imageUrl}
				alt="cover"
				className="w-12 h-12 object-cover rounded-full"
			/>
		),
	},

	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
]
