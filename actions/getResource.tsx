import { Resource } from '@/types'
import prisma from '@/lib/prismadb'

const getResource = async (resource: string, id: string) => {
	const resources = await prisma.resource.findUnique({
		where: {
			id,
		},
	})

	return resources
}

export default getResource
