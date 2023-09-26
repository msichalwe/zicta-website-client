import React from 'react'
import prisma from '@/lib/prismadb'
import DirectorsForm from './components/directors-form'

const Director = async ({ params }: { params: { id: string } }) => {
	const director = await prisma.director.findUnique({
		where: {
			id: params.id,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<DirectorsForm initialData={director} />
			</div>
		</div>
	)
}

export default Director
