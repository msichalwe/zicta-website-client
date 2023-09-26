import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(request: Request) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await request.json()
		const { title, fileType, type, fileUrl } = body

		if (!title) {
			return new NextResponse('Missing title ', { status: 400 })
		}

		if (!fileType) {
			return new NextResponse('Missing fileType', { status: 400 })
		}

		if (!type) {
			return new NextResponse('Missing type', { status: 400 })
		}

		if (!fileUrl) {
			return new NextResponse('Missing fileUrl', { status: 400 })
		}

		const procurement = await prisma.procurement.create({
			data: {
				title,
				fileType,
				type,
				fileUrl,
			},
		})
		return NextResponse.json(procurement)
	} catch (error: any) {
		console.log(error, 'POST PROCUREMENT ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(
	request: Request,
	{ params }: { params: { procurement: string } },
) {
	try {
		const procurements = await prisma.procurement.findMany({
			where: {
				type: params.procurement,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(procurements)
	} catch (error) {
		console.log(error, 'GET PROCUREMENTS ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
