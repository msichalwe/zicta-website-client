'use client'

import { ColumnDef } from '@tanstack/react-table'

export type AwardCategoriesColumn = {
	id: string
	name: string
	description: string
	criteria: string
}

export const columns: ColumnDef<AwardCategoriesColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Award Name',
		cell: ({ row }) => <p className="font-medium">{row.original.name}</p>,
	},
	{
		accessorKey: 'description',
		header: 'Description',
	},
	{
		accessorKey: 'criteria',
		header: 'Eligibility Criteria',
	},
]
