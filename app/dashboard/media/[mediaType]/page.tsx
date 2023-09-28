import React from 'react'
import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import MediaClient from './components/client'
import { MediaColumn } from './components/columns'

export const revalidate = 0

const Media = async ({ params }: { params: { mediaType: string } }) => {
	const media = await prisma.media.findMany({
		where: {
			type: params.mediaType,
		},
		include: {
			category: true,
		},
	})

	const formattedMedia: MediaColumn[] = media.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			description: data.description,
			createdAt: formattedCreatedAt,
			category: data.category.title,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<MediaClient data={formattedMedia} />
			</div>
		</div>
	)
}

export default Media
