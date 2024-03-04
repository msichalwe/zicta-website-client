'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
import {Copy, Edit, MoreHorizontal, Trash, View} from 'lucide-react'
import {toast} from 'react-hot-toast'
import {useParams, useRouter} from 'next/navigation'
import {useState} from 'react'
import axios from 'axios'
import {AlertModal} from '@/components/ui/modal/alert-modal'
import {Project} from "@/app/dashboard/developer-projects/miscelleneous/types";

interface CellActionProps {
    data: Project
}

export const ProjectCellAction: React.FC<CellActionProps> = ({data}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const onCopyId = (id: string) => {
        navigator.clipboard.writeText(id)
        toast.success('Copied to clipboard')
    }

    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/developer-projects/${data.id}`)
            router.refresh()
            router.push(`/dashboard/developer-projects/`)
            toast.success('Successfully Deleted')
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
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    <DropdownMenuItem
                        onClick={() =>
                            router.push(
                                `/dashboard/developer-projects/${data?.id}/view`,
                            )
                        }>
                        <View className="mr-2 h-4 w-4"/>
                        View Project
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() =>
                            router.push(`/dashboard/developer-projects/edit/${data?.id}`)
                        }>
                        <Edit className="mr-2 h-4 w-4"/>
                        Update
                    </DropdownMenuItem>
                    {
                        data.fileURL !== '' ? <DropdownMenuItem
                            onClick={() =>
                                router.push(
                                    `${data.fileURL}`,
                                )
                            }>
                            <View className="mr-2 h-4 w-4"/>
                            View Project Files
                        </DropdownMenuItem> : ''
                    }

                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4"/>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
