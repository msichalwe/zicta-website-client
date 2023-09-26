import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(req: Request) {
	try {
		const heroSection = await prisma.heroSection.findFirst({
			include: {
				images: true,
			},
		})

		return NextResponse.json(heroSection)
	} catch (error) {
		console.log('[HERO_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { title, content, buttonText, images } = body

		if (!content) {
			return new NextResponse('Name is required', { status: 400 })
		}
		if (!title) {
			return new NextResponse('content is required', { status: 400 })
		}
		if (!buttonText) {
			return new NextResponse('Button Text is required', { status: 400 })
		}
		if (!images || !images.length) {
			return new NextResponse('Image is required', { status: 400 })
		}

		const heroSection = await prisma.heroSection.create({
			data: {
				title,
				content,
				buttonText,
				images: {
					createMany: {
						data: [...images.map((image: { url: string }) => image)],
					},
				},
			},
		})

		return NextResponse.json(heroSection)
	} catch (error) {
		console.log('[HERO_SECTION_POST]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(req: Request) {
	try {
		const body = await req.json()

		const { title, content, buttonText, images } = body
		if (!content) {
			return new NextResponse('Name is required', { status: 400 })
		}
		if (!title) {
			return new NextResponse('content is required', { status: 400 })
		}
		if (!buttonText) {
			return new NextResponse('Button Text is required', { status: 400 })
		}
		if (!images || !images.length) {
			return new NextResponse('Image is required', { status: 400 })
		}

		await prisma.heroSection.update({
			where: {
				id: '64ae6fc8fe7c25fbea86ccda',
			},
			data: {
				title,
				content,
				buttonText,
				images: {
					deleteMany: {},
				},
			},
		})

		const heroSection = await prisma.heroSection.update({
			where: {
				id: '64ae6fc8fe7c25fbea86ccda',
			},
			data: {
				images: {
					createMany: {
						data: [...images.map((image: { url: string }) => image)],
					},
				},
			},
		})

		return NextResponse.json(heroSection)
	} catch (error) {}
}
