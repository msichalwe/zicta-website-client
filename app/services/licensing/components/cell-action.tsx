'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LicensesColumn } from './columns'
import { Button } from '@/components/ui/button'
import { Download, Edit, MoreHorizontal, Trash } from 'lucide-react'

interface CellActionProps {
	data: LicensesColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`

	const onDownload = () => {
		if (data.file) {
			const fileUrl = `${baseUrl}${data.file}`.toLowerCase() // Convert to lowercase

			const link = document.createElement('a')
			link.href = fileUrl
			// @ts-ignore
			link.download = data.file?.split('/').pop().toLowerCase() || '' // Convert to lowercase

			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		} else {
			console.error('File URL is undefined')
		}
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>

					<DropdownMenuItem onClick={() => onDownload()}>
						<Download className="mr-2 h-4 w-4" />
						Download
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
