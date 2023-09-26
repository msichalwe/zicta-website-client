'use client'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

interface ClientButtonProps {
	id: string | null | undefined
}

const ClientButton: React.FC<ClientButtonProps> = ({ id }) => {
	const params = useParams()
	const router = useRouter()
	return (
		<Button
			onClick={() =>
				router.push(`/dashboard/services-page/${params.serviceType}/${id}`)
			}>
			<Edit className="mr-2 h-4 w-4" />
			Edit
		</Button>
	)
}

export default ClientButton
