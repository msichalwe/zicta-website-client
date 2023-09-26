import React from 'react'
import { MediaForm } from './components/media-form'
import prisma from '@/lib/prismadb'

const CategoriesPage = async ({ params }: { params: { mediaId: string } }) => {
	const categories = await prisma.category.findMany()

	const media = await prisma.media.findUnique({
		where: {
			id: params.mediaId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<MediaForm categories={categories} initialData={media} />
			</div>
		</div>
	)
}

export default CategoriesPage
