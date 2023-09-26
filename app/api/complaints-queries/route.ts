import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { mailOptions, transporter } from '@/config/nodemailer'

export async function POST(request: Request) {
	try {
		const session = getServerSession(authOptions)

		if (!session) {
			return new NextResponse('Unauthorized', { status: 401 })
		}
		const body = await request.json()
		const { name, email, phone, message, subject } = body

		if (!name) {
			return new NextResponse('Missing name', { status: 400 })
		}

		if (!email) {
			return new NextResponse('Missing email', { status: 400 })
		}

		if (!phone) {
			return new NextResponse('Missing phone', { status: 400 })
		}

		if (!message) {
			return new NextResponse('Missing message', { status: 400 })
		}

		if (!subject) {
			return new NextResponse('Missing subject', { status: 400 })
		}

		const complaint = await prisma.complaints.create({
			data: {
				name,
				email,
				phone,
				message,
				subject,
			},
		})

		await transporter.sendMail({
			...mailOptions,
			to: 'complaints@zicta.zm',
			cc: 'info@zicta.zm ',
			subject: `New Complaint from website: ${subject}`,
			text: `New Complaint on the ZICTA website from \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message}`,
		})

		return NextResponse.json(complaint)
	} catch (error: any) {
		console.log(error, 'POST COMPLAINT ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}

export async function GET(request: Request) {
	try {
		const complaints = await prisma.complaints.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		})

		return NextResponse.json(complaints)
	} catch (error: any) {
		console.log(error, 'GET COMPLAINTS ERROR')
		return new NextResponse('Internal Error', { status: 500 })
	}
}
