import React from 'react'

import prisma from '@/lib/prismadb'
import { FaqForm } from './components/faq-form'

const EditPage = async ({ params }: { params: { faqId: string } }) => {
	const faq = await prisma.faq.findUnique({
		where: {
			id: params.faqId,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<FaqForm initialData={faq} />
			</div>
		</div>
	)
}

export default EditPage
