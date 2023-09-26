import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import FaqClient from './components/client'
import { FaqColumn } from './components/columns'

const Faq = async ({ params }: { params: { FaqType: string } }) => {
	const Faq = await prisma.faq.findMany()

	const formattedFaq: FaqColumn[] = Faq.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			question: data.question,
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<FaqClient data={formattedFaq} />
			</div>
		</div>
	)
}

export default Faq
