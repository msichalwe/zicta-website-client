import { Resource } from '@/types'
import prisma from '@/lib/prismadb'

const getResource = async (resource: string) => {
	const resources = await prisma.resource.findMany({
		where: {
			type: resource,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})

	return resources
}

export default getResource
