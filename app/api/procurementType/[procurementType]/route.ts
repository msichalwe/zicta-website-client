import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
export async function GET(
	request: Request,
	{ params }: { params: { procurementType: string } },
) {
	try {
		const procurements = await prisma.procurement.findMany({
			where: {
				type: params.procurementType,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(procurements)
	} catch (error) {
		console.log(error, 'GET PROCUREMENTS ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
