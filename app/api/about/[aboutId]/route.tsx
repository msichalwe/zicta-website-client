import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function PUT(
	request: Request,
	{ params }: { params: { aboutId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
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

		const about = await prisma.about.update({
			where: {
				id: params.aboutId,
			},
			data: {
				title,
				description,
				content,
				imageUrl,
			},
		})
		return NextResponse.json(about)
	} catch (error: any) {
		console.log(error, 'PUT ABOUT ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(
	req: Request,
	{ params }: { params: { aboutId: string } },
) {
	try {
		const about = await prisma.about.findUnique({
			where: {
				id: params.aboutId,
			},
		})
		return NextResponse.json(about)
	} catch (error: any) {
		console.log(error, 'GET ABOUT ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
