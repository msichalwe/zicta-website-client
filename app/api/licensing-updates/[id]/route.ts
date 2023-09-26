import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function GET(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		if (!params.id) {
			return new NextResponse('id is required', { status: 400 })
		}

		const updates = await prisma.licenceFiles.findUnique({
			where: {
				id: params.id,
			},
		})

		return NextResponse.json(updates)
	} catch (error) {
		console.log(error, 'GET LICENSE UPDATES ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		if (!params.id) {
			return new NextResponse('id is required', { status: 400 })
		}

		const updates = await prisma.licenceFiles.delete({
			where: {
				id: params.id,
			},
		})

		return NextResponse.json(updates)
	} catch (error) {
		console.log(error, 'DELETE LICENSE UPDATES ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
