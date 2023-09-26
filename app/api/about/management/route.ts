import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(request: Request) {
	try {
		const body = await request.json()

		const { name, description, imageUrl } = body

		if (!name) {
			return new NextResponse('Missing name', { status: 400 })
		}

		if (!description) {
			return new NextResponse('Missing description', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Missing Image URL', { status: 400 })
		}

		const director = await prisma.director.create({
			data: {
				name,
				description,
				imageUrl,
			},
		})

		return NextResponse.json(director)
	} catch (error) {
		console.log(error, 'POST DIRECTOR ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(req: Request) {
	try {
		const directors = await prisma.director.findMany({
			where: {
				board: false,
			},
		})

		return NextResponse.json(directors)
	} catch (error) {
		console.log(error, 'GET DIRECTOR ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
