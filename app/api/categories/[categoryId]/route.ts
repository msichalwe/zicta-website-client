import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function GET(
	request: Request,
	{ params }: { params: { categoryId: string } },
) {
	try {
		if (!params.categoryId) {
			return new NextResponse('Missing category id', { status: 400 })
		}

		const category = await prisma.category.findUnique({
			where: { id: params.categoryId },
		})
		if (!category) {
			return new NextResponse('Category not found', { status: 404 })
		}
		return NextResponse.json(category)
	} catch (error: any) {
		console.log(error, 'GET CATEGORY ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { categoryId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.categoryId) {
			return new NextResponse('Missing category id', { status: 400 })
		}

		const body = await request.json()
		const { title, description } = body

		if (!title) {
			return new NextResponse('Missing title', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Missing description', { status: 400 })
		}

		const category = await prisma.category.updateMany({
			where: { id: params.categoryId },
			data: {
				title,
				description,
			},
		})
		return NextResponse.json(category)
	} catch (error) {
		console.log(error, 'UPDATE CATEGORY ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { categoryId: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.categoryId) {
			return new NextResponse('Missing Property Id', { status: 400 })
		}

		console.log('Property ID:', params.categoryId)

		const category = await prisma.category.deleteMany({
			where: { id: params.categoryId },
		})
		return NextResponse.json(category)
	} catch (error) {
		console.log(error)
		return new NextResponse('DELETE CATEGORY FAILED', { status: 500 })
	}
}
