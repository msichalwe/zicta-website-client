import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(req: Request) {
	try {
		const testimonial = await prisma.testimonial.findFirst()

		return NextResponse.json(testimonial)
	} catch (error) {
		console.log('[TESTIMONIAL_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { title, content, imageUrl, name } = body

		if (!title) {
			return new NextResponse('Title is required', { status: 400 })
		}
		if (!name) {
			return new NextResponse('Name is required', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Image is required', { status: 400 })
		}

		const testimonial = await prisma.testimonial.create({
			data: {
				title,
				name,
				content,
				imageUrl,
			},
		})

		return NextResponse.json(testimonial)
	} catch (error) {
		console.log('[TESTIMONIAL_SECTION_POST]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}

export async function PATCH(req: Request) {
	try {
		const body = await req.json()

		const { title, content, imageUrl, name } = body

		if (!title) {
			return new NextResponse('title is required', { status: 400 })
		}

		if (!imageUrl) {
			return new NextResponse('Image is required', { status: 400 })
		}
		if (!content) {
			return new NextResponse('Content is required', { status: 400 })
		}
		if (!name) {
			return new NextResponse('Name is required', { status: 400 })
		}

		const testimonial = await prisma.testimonial.update({
			where: {
				id: '64b03d5ac7c11461f5f0450e',
			},
			data: {
				title,
				content,
				imageUrl,
				name,
			},
		})

		return NextResponse.json(testimonial)
	} catch (error) {}
}
