import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(request: Request) {
	const session = getServerSession(authOptions)

	if (!session) {
		return new NextResponse('Unauthorized', { status: 401 })
	}

	try {
		const body = await request.json()
		const { title, description, content, imageUrl } = body

		if (!title) {
			return new NextResponse('Missing title ', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Missing description', { status: 400 })
		}

		if (!content) {
			return new NextResponse('Missing content', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Missing Image URL', { status: 400 })
		}

		const about = await prisma.about.create({
			data: {
				title,
				description,
				content,
				imageUrl,
			},
		})
		return NextResponse.json(about)
	} catch (error: any) {
		console.log(error, 'POST ABOUT ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const about = await prisma.about.findUnique({
			where: {
				id: params.id,
			},
		})

		return NextResponse.json(about)
	} catch (error) {
		console.log(error, 'GET ABOUT ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
