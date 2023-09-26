import React from 'react'
import { SubServiceForm } from './components/subservice-form'
import prisma from '@/lib/prismadb'

const SubServicesPage = async ({
	params,
}: {
	params: { subserviceId: string }
}) => {
	const services = await prisma.service.findMany()

	const service = await prisma.subService.findUnique({
		where: {
			id: params.subserviceId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<SubServiceForm services={services} initialData={service} />
			</div>
		</div>
	)
}

export default SubServicesPage
