'use client'

import { ColumnDef } from '@tanstack/react-table'

export type PostalRegistryColumn = {
	id: string
	orderedId: number
	operator: string
	licenceNumber: string
	type: string
}

export const columns: ColumnDef<PostalRegistryColumn>[] = [
	{
		accessorKey: 'orderedId',
		header: '#',
	},
	{
		accessorKey: 'licenceNumber',
		header: 'Licence Number',
	},
	{
		accessorKey: 'operator',
		header: 'Name of Operator',
	},
	{
		accessorKey: 'type',
		header: 'Licence Type',
	},
]
