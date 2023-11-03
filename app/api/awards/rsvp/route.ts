import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const rsvp = await prisma.rsvp.create({
			data: {
				...body,
			},
		})

		return NextResponse.json(rsvp)
	} catch (error) {
		console.log('[RSVP]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}