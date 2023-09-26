import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { title, description, type, content, categoryId, imageUrl } = body

		if (!title) {
			return new NextResponse('Missing title ', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Missing description', { status: 400 })
		}

		if (!type) {
			return new NextResponse('Missing type', { status: 400 })
		}

		if (!content) {
			return new NextResponse('Missing content', { status: 400 })
		}

		if (!categoryId) {
			return new NextResponse('Missing categoryId', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Missing Image URL', { status: 400 })
		}

		const media = await prisma.media.create({
			data: {
				title,
				description,
				type,
				content,
				categoryId,
				imageUrl,
			},
		})
		return NextResponse.json(media)
	} catch (error: any) {
		console.log(error, 'POST MEDIA ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(
	request: Request,
	{ params }: { params: { mediaType: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const media = await prisma.media.findMany({
			where: {
				type: params.mediaType,
			},
			include: {
				category: true,
			},
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
