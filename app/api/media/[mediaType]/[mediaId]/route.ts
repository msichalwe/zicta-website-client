import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(
	req: Request,
	{ params }: { params: { mediaId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.mediaId) {
			return new NextResponse('Media id is required', { status: 400 })
		}

		const mediaPost = await prisma.media.findUnique({
			where: {
				id: params.mediaId,
			},
			include: {
				category: true,
			},
		})

		return NextResponse.json(mediaPost)
	} catch (error) {
		console.log('[MEDIA_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { mediaId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.mediaId) {
			return new NextResponse('Media id is required', { status: 400 })
		}

		const mediaPost = await prisma.media.delete({
			where: {
				id: params.mediaId,
			},
		})

		return NextResponse.json(mediaPost)
	} catch (error) {
		console.log('[MEDIA_DELETE]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
export async function PATCH(
	req: Request,
	{ params }: { params: { mediaId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await req.json()

		const { title, categoryId, description, content, type, imageUrl } = body

		if (!params.mediaId) {
			return new NextResponse('Media id is required', { status: 400 })
		}

		if (!title) {
			return new NextResponse('Name is required', { status: 400 })
		}

		if (!categoryId) {
			return new NextResponse('Category id is required', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Description is required', { status: 400 })
		}

		if (!content) {
			return new NextResponse('Content is required', { status: 400 })
		}
		if (!imageUrl) {
			return new NextResponse('ImageUrl is required', { status: 400 })
		}

		const mediaPost = await prisma.media.update({
			where: {
				id: params.mediaId,
			},
			data: {
				title,
				description,
				categoryId,
				type,
				content,
				imageUrl,
			},
		})

		return NextResponse.json(mediaPost)
	} catch (error) {
		console.log('[MEDIA_PATCH]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
