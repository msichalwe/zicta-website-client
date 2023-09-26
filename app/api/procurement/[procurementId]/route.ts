import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function GET(
	req: Request,
	{ params }: { params: { procurementId: string } },
) {
	try {
		if (!params.procurementId) {
			return new NextResponse('Procurement id is required', { status: 400 })
		}

		const procurementPost = await prisma.procurement.findUnique({
			where: {
				id: params.procurementId,
			},
		})
		return NextResponse.json(procurementPost?.fileUrl)
	} catch (error) {
		console.log('[PROCUREMENT_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { procurementId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.procurementId) {
			return new NextResponse('Procurement id is required', { status: 400 })
		}

		const procurementPost = await prisma.procurement.delete({
			where: {
				id: params.procurementId,
			},
		})

		return NextResponse.json(procurementPost)
	} catch (error) {
		console.log('[PROCUREMENT_DELETE]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { procurementId: string } },
) {
	try {
		const body = await req.json()

		const { title, fileUrl, fileType, type } = body

		if (!params.procurementId) {
			return new NextResponse('Procurement id is required', { status: 400 })
		}

		if (!title) {
			return new NextResponse('title is required', { status: 400 })
		}

		if (!fileUrl) {
			return new NextResponse('FileUrl is required', { status: 400 })
		}

		if (!fileType) {
			return new NextResponse('FileType is required', { status: 400 })
		}

		const procurementPost = await prisma.procurement.update({
			where: {
				id: params.procurementId,
			},
			data: {
				title,
				fileType,
				fileUrl,
				type,
			},
		})

		return NextResponse.json(procurementPost)
	} catch (error) {
		console.log('[PROCUREMENT_PATCH]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
