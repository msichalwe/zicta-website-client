import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";
import sendProjectStatusMail from "@/app/dashboard/developer-projects/miscelleneous/mailer";

export async function PATCH(request: NextRequest, {params}: { params: { id: string } }) {

    const session = getServerSession(authOptions)

    const body = await request.json()
    const {id, status, members} = body;
    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {

        const data = await prismadb.developerProject.update({
            where: {id: id},
            data: {
                status: status
            }
        })

        await sendProjectStatusMail('Status Change', status,members )



        return NextResponse.json({
            'message': 'success',
            'data': data
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})
    }

}