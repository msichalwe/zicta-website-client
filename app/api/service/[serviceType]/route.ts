import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function POST(request: Request) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await request.json()
		const { title, description, type, content, imageUrl } = body

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

		const service = await prisma.service.create({
			data: {
				title,
				description,
				type,
				content,
				imageUrl,
			},
		})
		return NextResponse.json(service)
	} catch (error: any) {
		console.log(error, 'POST SERVICE ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(
	request: Request,
	{ params }: { params: { serviceType: string } },
) {
	try {
		const service = await prisma.service.findUnique({
			where: {
				type: params.serviceType,
			},
			include: {
				subServices: true,
			},
		})

		return NextResponse.json(service)
	} catch (error) {
		console.log(error, 'GET SERVICE ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
