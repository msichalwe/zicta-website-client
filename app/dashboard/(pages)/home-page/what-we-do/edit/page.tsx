import React from 'react'

import prisma from '@/lib/prismadb'
import { WhatWeDoForm } from './components/whatwedo-form'

const EditPage = async () => {
	// const whatWeDo = await prisma.findUnique({
	// 	where: {
	// 		id: '64ae804bdc8bac9481e7e582',
	// 	},
	// })

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<WhatWeDoForm initialData={null} />
			</div>
		</div>
	)
}

export default EditPage
