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
		const { title, type, fileUrl, fileType } = body

		if (!title) {
			return new NextResponse('Missing title ', { status: 400 })
		}

		if (!type) {
			return new NextResponse('Missing type', { status: 400 })
		}

		if (!fileUrl) {
			return new NextResponse('Missing fileUrl', { status: 400 })
		}

		const updates = await prisma.licenceFiles.create({
			data: {
				title,
				type,
				file: fileUrl,
				fileType,
			},
		})

		return NextResponse.json(updates)
	} catch (error) {
		console.log(error, 'LICENSE REGISTER ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(request: Request) {
	try {
		const updates = await prisma.licenceFiles.findMany({
			where: {
				type: 'updates',
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(updates)
	} catch (error) {
		console.log(error, 'GET LICENSE REGISTER ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
