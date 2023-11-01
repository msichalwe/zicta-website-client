import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(
	req: Request,
	{ params }: { params: { awardCategoryId: string } },
) {
	try {
		const awardNominations = await prisma.nomination.findMany({
			where: {
				awardCategory: {
					id: params.awardCategoryId,
				},
			},
			include: {
				awardCategory: {
					select: {
						name: true,
					},
				},
			},
		})

		return NextResponse.json(awardNominations)
	} catch (error) {
		console.log(error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
