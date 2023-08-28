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
	const baseUrl = 'http://localhost:3001' // Replace with your actual baseUrl

	const onDownload = () => {
		if (data.file) {
			const fileUrl = `${baseUrl}${data.file}` // Construct the complete URL using baseUrl
			const link = document.createElement('a')
			link.href = fileUrl
			link.download = data.file.split('/').pop() || '' // Use file name from URL
			document.body.appendChild(link) // Append to body
			link.click() // Simulate click
			document.body.removeChild(link) // Remove from body
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
