import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(request: Request) {
	try {
		const media = await prisma.media.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(media)
	} catch (error) {
		console.log(error, 'GET MEDIA ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
