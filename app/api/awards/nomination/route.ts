import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const nominations = await prisma.nomination.create({
			data: {
				...body,
			},
		})

		return NextResponse.json(nominations)
	} catch (error) {
		console.log('[NOMINATIONS]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(req: Request) {
	try {
		const nominations = await prisma.nomination.findMany({
			include: {
				awardCategory: {
					select: {
						name: true,
					},
				},
			},
		})

		return NextResponse.json(nominations)
	} catch (error) {
		console.error(error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}
