import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(req: Request) {
	try {
		const faqs = await prisma.faq.findMany()
		return NextResponse.json(faqs)
	} catch (error) {
		console.log('[FAQ_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function POST(req: Request) {
	const session = getServerSession(authOptions)

	if (!session) {
		return new NextResponse('Unauthorized', { status: 401 })
	}
	try {
		const body = await req.json()

		const { question, answer } = body

		if (!question) {
			return new NextResponse('answer is required', { status: 400 })
		}

		const faq = await prisma.faq.create({
			data: {
				question,
				answer,
			},
		})

		return NextResponse.json(faq)
	} catch (error) {
		console.log('[FAQ_SECTION_POST]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
