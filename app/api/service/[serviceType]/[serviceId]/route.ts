import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(
	req: Request,
	{ params }: { params: { serviceId: string } },
) {
	try {
		if (!params.serviceId) {
			return new NextResponse('Service id is required', { status: 400 })
		}

		const servicePost = await prisma.service.findUnique({
			where: {
				id: params.serviceId,
			},
			include: {
				subServices: true,
			},
		})

		return NextResponse.json(servicePost)
	} catch (error) {
		console.log('[SERVICE_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { serviceId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.serviceId) {
			return new NextResponse('Service id is required', { status: 400 })
		}

		const servicePost = await prisma.service.delete({
			where: {
				id: params.serviceId,
			},
		})

		return NextResponse.json(servicePost)
	} catch (error) {
		console.log('[SERVICE_DELETE]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { serviceId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await req.json()

		const { title, imageUrl, description, content, type } = body

		if (!params.serviceId) {
			return new NextResponse('Service id is required', { status: 400 })
		}

		if (!title) {
			return new NextResponse('Name is required', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Description is required', { status: 400 })
		}

		if (!content) {
			return new NextResponse('Content is required', { status: 400 })
		}

		const servicePost = await prisma.service.update({
			where: {
				id: params.serviceId,
			},
			data: {
				title,
				description,
				imageUrl,
				type,
				content,
			},
		})

		return NextResponse.json(servicePost)
	} catch (error) {
		console.log('[SERVICE_PATCH]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
