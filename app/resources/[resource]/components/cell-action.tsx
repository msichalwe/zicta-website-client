'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ResourceColumn } from './columns'
import { Button } from '@/components/ui/button'
import { Copy, Download, Edit, MoreHorizontal, Trash } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

interface CellActionProps {
	data: ResourceColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)

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
					<DropdownMenuLabel>Download</DropdownMenuLabel>
					<DropdownMenuItem>
						<Download className="mr-2 h-4 w-4" />
						PDF
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Download className="mr-2 h-4 w-4" />
						DOCX
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
