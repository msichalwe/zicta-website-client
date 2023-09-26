import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(
	req: Request,
	{ params }: { params: { faqId: string } },
) {
	try {
		const faq = await prisma.faq.findUnique({
			where: {
				id: params.faqId,
			},
		})

		return NextResponse.json(faq)
	} catch (error) {
		console.log('[FAQ_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { faqId: string } },
) {
	try {
		const body = await req.json()

		const { question, answer } = body

		if (!question) {
			return new NextResponse('question is required', { status: 400 })
		}

		const faq = await prisma.faq.update({
			where: {
				id: params.faqId,
			},
			data: {
				question,
				answer,
			},
		})

		return NextResponse.json(faq)
	} catch (error) {}
}
