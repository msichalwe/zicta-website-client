import React from 'react'

import prisma from '@/lib/prismadb'
import { TestimonialForm } from './components/testimonial-form'

const EditPage = async () => {
	const tesTestimonial = await prisma.testimonial.findFirst()

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<TestimonialForm initialData={tesTestimonial} />
			</div>
		</div>
	)
}

export default EditPage
