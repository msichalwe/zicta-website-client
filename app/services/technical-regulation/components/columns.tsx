'use client'

import { ColumnDef } from '@tanstack/react-table'

export type RegistryColumn = {
	id: string
	sn: number
	dealer: string
	licence_number: string
}

export const columns: ColumnDef<RegistryColumn>[] = [
	{
		accessorKey: 'sn',
		header: 'SN',
	},
	{
		accessorKey: 'dealer',
		header: 'Dealer',
	},
	{
		accessorKey: 'licence_number',
		header: 'Licence Number',
	},
]
