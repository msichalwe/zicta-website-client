'use client'

import { ColumnDef } from '@tanstack/react-table'

export type AwardsColumn = {
	id: string
	name: string
	email: string | null
	phone: string | null
	reason: string | null
	category: string | null
}

export const columns: ColumnDef<AwardsColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Nominee Name',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'phone',
		header: 'Phone',
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
]
