import React from 'react'
import { ServiceForm } from './components/service-form'
import prisma from '@/lib/prismadb'

const ServicesPage = async ({ params }: { params: { serviceId: string } }) => {
	const service = await prisma.service.findUnique({
		where: {
			id: params.serviceId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<ServiceForm initialData={service} />
			</div>
		</div>
	)
}

export default ServicesPage
