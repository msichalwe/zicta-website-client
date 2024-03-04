import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";
import {Task} from "@/app/dashboard/developer-projects/miscelleneous/types";


export async function POST(request: NextRequest) {

    const session = getServerSession(authOptions)

    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {
        const body = await request.json()
        const {
            name,
            status,
            startDate,
            endDate,
            budget,
            fileURL,
            publicUserImpact,
            description,
            institutionalImpact,
            rating,
            requestedBy,
            contactPerson,
            department
        } = body


        let res = await prismadb.developerProject.create({
            data: {
                team: [],
                name,
                status,
                startDate,
                endDate,
                budget,
                fileURL,
                publicUserImpact,
                description,
                institutionalImpact,
                rating,
                requestedBy,
                contactPerson,
                department
            }
        })

        return NextResponse.json({
            'message': 'success',
            'data': res
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})
    }

}