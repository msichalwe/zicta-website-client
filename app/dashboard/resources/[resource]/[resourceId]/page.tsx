import React from 'react'
import { ResourceForm } from './components/resource-form'
import prisma from '@/lib/prismadb'

const ResourcePage = async ({ params }: { params: { resourceId: string } }) => {
	const resource = await prisma.resource.findUnique({
		where: {
			id: params.resourceId,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<ResourceForm initialData={resource} />
			</div>
		</div>
	)
}

export default ResourcePage
