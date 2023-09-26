'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface FAQProps {
	data: any[]
}

const FAQClient: React.FC<FAQProps> = ({ data }) => {
	const router = useRouter()
	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`FAQs (${data.length})`}
					description={`Manage all the FAQs here.`}
				/>
				<Button onClick={() => router.push('/dashboard/faqs/new')}>
					Add New <Plus size={16} />
				</Button>
			</div>
			<Separator />
		</>
	)
}

export default FAQClient
