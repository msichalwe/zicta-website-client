import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	try {
		const newsAndEvents = await prisma.media.findMany({
			where: {
				OR: [{ type: 'news' }, { type: 'events' }],
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(newsAndEvents)
	} catch (error) {
		console.log(error, 'GET NEWS AND EVENTS ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
