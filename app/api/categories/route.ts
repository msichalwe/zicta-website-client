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
		const { title, description } = body

		if (!title) {
			return new NextResponse('Missing title ', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Missing description', { status: 400 })
		}

		const category = await prisma.category.create({
			data: {
				title,
				description,
			},
		})
		return NextResponse.json(category)
	} catch (error: any) {
		console.log(error, 'POST CATEGORIES ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(request: Request) {
	try {
		const categories = await prisma.category.findMany()
		return NextResponse.json(categories)
	} catch (error: any) {
		console.log(error, 'GET CATEGORIES ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
