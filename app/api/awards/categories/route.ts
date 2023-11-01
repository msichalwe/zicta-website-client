import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(req: Request) {
	try {
		const categories = await prisma.awardCategory.findMany({
			select: {
				id: true,
				name: true,
			},
		})

		return NextResponse.json(categories)
	} catch (error) {
		console.log(error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
