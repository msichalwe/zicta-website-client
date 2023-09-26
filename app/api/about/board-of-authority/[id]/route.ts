import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function PATCH(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await req.json()
		const { name, description, imageUrl } = body

		if (!name) {
			return new NextResponse('Name is required', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Description is required', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Image Url is required', { status: 400 })
		}

		const director = await prisma.director.update({
			where: {
				id: params.id,
			},
			data: {
				name,
				description,
				imageUrl,
			},
		})

		return NextResponse.json(director)
	} catch (error) {
		console.log('[DIRECTOR_PATCH]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const director = await prisma.director.delete({
			where: {
				id: params.id,
			},
		})

		return NextResponse.json(director)
	} catch (error) {
		console.log('[DIRECTOR_DELETE]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
