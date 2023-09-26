import React from 'react'

import prisma from '@/lib/prismadb'
import { HeroForm } from './components/hero-form'

const EditPage = async () => {
	const hero = await prisma.heroSection.findUnique({
		where: {
			id: '64ae6fc8fe7c25fbea86ccda',
		},
		include: {
			images: true,
		},
	})
	console.log('🚀 ~ file: page.tsx:15 ~ EditPage ~ hero:', hero)

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<HeroForm initialData={hero} />
			</div>
		</div>
	)
}

export default EditPage
