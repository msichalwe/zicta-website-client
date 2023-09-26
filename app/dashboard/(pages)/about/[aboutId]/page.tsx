import React from 'react'

import prisma from '@/lib/prismadb'
import { AboutForm } from './components/about-form'

const EditPage = async ({ params }: { params: { aboutId: string } }) => {
	const about = await prisma.about.findUnique({
		where: {
			id: params.aboutId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<AboutForm initialData={about} />
			</div>
		</div>
	)
}

export default EditPage
