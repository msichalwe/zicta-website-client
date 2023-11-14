import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const {voter_email} = body

		const dbEmail = await prisma.votes.findUnique({
			where: {
				voter_email,
			},
		})

		if (dbEmail) {
			return new NextResponse('Email already voted', { status: 400 })
		}


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