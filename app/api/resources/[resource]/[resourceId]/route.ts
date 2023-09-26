import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(
	req: Request,
	{ params }: { params: { resourceId: string } },
) {
	try {
		if (!params.resourceId) {
			return new NextResponse('Resource id is required', { status: 400 })
		}

		const resourcePost = await prisma.resource.findUnique({
			where: {
				id: params.resourceId,
			},
		})
		return NextResponse.json(resourcePost?.fileUrl)
	} catch (error) {
		console.log('[RESOURCE_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { resourceId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.resourceId) {
			return new NextResponse('Resource id is required', { status: 400 })
		}

		const resourcePost = await prisma.resource.delete({
			where: {
				id: params.resourceId,
			},
		})

		return NextResponse.json(resourcePost)
	} catch (error) {
		console.log('[RESOURCE_DELETE]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { resourceId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await req.json()

		const { title, fileUrl, fileType, type } = body

		if (!params.resourceId) {
			return new NextResponse('Resource id is required', { status: 400 })
		}

		if (!title) {
			return new NextResponse('Name is required', { status: 400 })
		}

		if (!fileUrl) {
			return new NextResponse('Category id is required', { status: 400 })
		}

		if (!fileType) {
			return new NextResponse('FileType is required', { status: 400 })
		}

		const resourcePost = await prisma.resource.update({
			where: {
				id: params.resourceId,
			},
			data: {
				title,
				fileType,
				fileUrl,
				type,
			},
		})

		return NextResponse.json(resourcePost)
	} catch (error) {
		console.log('[RESOURCE_PATCH]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
