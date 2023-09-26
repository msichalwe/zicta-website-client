import React from 'react'

import prisma from '@/lib/prismadb'
import { BannerForm } from './components/banner-form'

const EditPage = async () => {
	const banner = await prisma.bannerSection.findUnique({
		where: {
			id: '64ae804bdc8bac9481e7e582',
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<BannerForm initialData={banner} />
			</div>
		</div>
	)
}

export default EditPage
