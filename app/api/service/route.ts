import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(request: Request) {
	try {
		const service = await prisma.service.findMany({
			include: {
				subServices: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(service)
	} catch (error) {
		console.log(error, 'GET SERVICE ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
