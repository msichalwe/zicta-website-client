import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(req: Request) {
	try {
		const postal = await prisma.registeredPostal.findMany({
			orderBy: {
				orderedId: 'asc',
			},
		})

		return NextResponse.json(postal)
	} catch (error) {
		console.log(error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
