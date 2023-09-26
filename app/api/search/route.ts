import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import url from 'url'

export async function GET(req: Request) {
	try {
		const query = url.parse(req.url, true).query

		if (typeof query.q !== 'string') {
			return new NextResponse('Query is required', { status: 400 })
		}

		const resources = await prisma.resource.findMany({
			where: {
				OR: [
					{
						title: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						type: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
				],
			},
		})

		const procurement = await prisma.procurement.findMany({
			where: {
				OR: [
					{
						title: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						type: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
				],
			},
		})

		const media = await prisma.media.findMany({
			where: {
				OR: [
					{
						title: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						type: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						description: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						content: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
				],
			},
		})

		const services = await prisma.service.findMany({
			where: {
				OR: [
					{
						title: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						type: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						description: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
					{
						content: {
							contains: query.q,
							mode: 'insensitive',
						},
					},
				],
			},
		})

		await prisma.searchQuery.create({
			data: {
				query: query.q,
			},
		})

		return NextResponse.json({
			resources,
			procurement,
			media,
			services,
		})
	} catch (error) {
		console.log('[Search_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
