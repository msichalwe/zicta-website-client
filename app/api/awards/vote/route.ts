import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const vote = await prisma.votes.create({
			data: {
				...body,
			},
		})

		return NextResponse.json(vote)
	} catch (error) {
		console.log('[vote]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}