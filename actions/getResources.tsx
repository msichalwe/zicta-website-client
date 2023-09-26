import { Resource } from '@/types'
import prisma from '@/lib/prismadb'

const getResource = async (resource: string) => {
	const resources = await prisma.resource.findMany({
		where: {
			type: resource,
		},
	})

	return resources
}

export default getResource
