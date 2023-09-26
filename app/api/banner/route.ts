import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(req: Request) {
	try {
		const bannerSection = await prisma.bannerSection.findFirst()

		return NextResponse.json(bannerSection)
	} catch (error) {
		console.log('[BANNER_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function POST(req: Request) {
	const session = getServerSession(authOptions)

	if (!session) {
		return new NextResponse('Unauthorized', { status: 401 })
	}
	try {
		const body = await req.json()

		const { title, description, imageUrl } = body

		if (!title) {
			return new NextResponse('description is required', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Image is required', { status: 400 })
		}

		const bannerSection = await prisma.bannerSection.create({
			data: {
				title,
				description,
				imageUrl,
			},
		})

		return NextResponse.json(bannerSection)
	} catch (error) {
		console.log('[BANNER_SECTION_POST]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(req: Request) {
	const session = getServerSession(authOptions)

	if (!session) {
		return new NextResponse('Unauthorized', { status: 401 })
	}
	try {
		const body = await req.json()

		const { title, description, imageUrl } = body

		if (!title) {
			return new NextResponse('title is required', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Image is required', { status: 400 })
		}

		const bannerSection = await prisma.bannerSection.update({
			where: {
				id: '64ae804bdc8bac9481e7e582',
			},
			data: {
				title,
				description,
				imageUrl,
			},
		})

		return NextResponse.json(bannerSection)
	} catch (error) {}
}
