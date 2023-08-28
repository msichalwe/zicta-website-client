'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { StatsColumn } from './columns'
import { Button } from '@/components/ui/button'
import { Download, Edit, MoreHorizontal, Trash } from 'lucide-react'

import axios from 'axios'

interface CellActionProps {
	data: StatsColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const onDownload = () => {
		if (data.file) {
			const fileUrl = data.file
			const link = document.createElement('a')
			link.href = fileUrl
			link.download = fileUrl.split('/').pop() || '' // Use file name from URL
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
