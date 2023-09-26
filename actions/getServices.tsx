import prisma from '@/lib/prismadb'
const getServices = async (serviceType: string) => {
	const sevices = await prisma.service.findFirst({
		where: {
			type: serviceType,
		},
	})

	return sevices
}

export default getServices
