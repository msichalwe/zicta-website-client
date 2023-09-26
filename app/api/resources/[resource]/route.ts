import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function POST(request: Request) {
	const session = getServerSession(authOptions)

	if (!session) {
		return new NextResponse('Unauthorized', { status: 401 })
	}
	try {
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

		const resource = await prisma.resource.create({
			data: {
				title,
				fileType,
				type,
				fileUrl,
			},
		})
		return NextResponse.json(resource)
	} catch (error: any) {
		console.log(error, 'POST RESOURCE ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(
	request: Request,
	{ params }: { params: { resource: string } },
) {
	try {
		const resources = await prisma.resource.findMany({
			where: {
				type: params.resource,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(resources)
	} catch (error) {
		console.log(error, 'GET RESOURCES ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
