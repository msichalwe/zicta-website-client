import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET(
	req: Request,
	{ params }: { params: { complaintId: string } },
) {
	try {
		if (!params.complaintId) {
			return new NextResponse('Complaint id is required', { status: 400 })
		}

		const complaint = await prisma.complaints.findUnique({
			where: {
				id: params.complaintId,
			},
		})

		return NextResponse.json(complaint)
	} catch (error) {
		console.log('[COMPLAINT_GET]', error)
		return new NextResponse('Internal error', { status: 500 })
	}
}
