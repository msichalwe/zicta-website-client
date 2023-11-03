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
import axios from 'axios'
import { AlertModal } from '@/components/ui/modal/alert-modal'

interface CellActionProps {
	data: ResourceColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const params = useParams()

	const onCopyId = (id: string) => {
		navigator.clipboard.writeText(id)
		toast.success('Copied to clipboard')
	}

	const onDownload = async () => {
		try {
			setLoading(true)
			await axios
				.get(`/api/services-page/licensing-updates/${data.id}`)
				.then((res) => {
					const downloadUrl = res.data // Assuming the response contains the download URL
					window.open(downloadUrl, '_blank')
				})
		} catch (error) {
			console.log('download error', error)
		}
	}

	const onDelete = async () => {
		try {
			setLoading(true)
			await axios.delete(`/api/services-page/licensing-updates/${data.id}`)
			router.refresh()
			toast.success(' Deleted')
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
			setOpen(false)
		}
	}

	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={onDelete}
				loading={loading}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem
						onClick={() =>
							router.push(
								`/dashboard/services-page/licensing-updates/${data.id}`,
							)
						}>
						<Edit className="mr-2 h-4 w-4" />
						Update
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => onCopyId(data.id)}>
						<Copy className="mr-2 h-4 w-4" />
						Copy ID
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => onDownload()}>
						<Download className="mr-2 h-4 w-4" />
						Download
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setOpen(true)}>
						<Trash className="mr-2 h-4 w-4" />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
