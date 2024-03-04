import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";


export async function PUT(request: NextRequest, {params}: { params: { id: string } }) {

    const session = getServerSession(authOptions)

    const body = await request.json()
    const {id, comment} = body;
    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {

        console.log(body)
        const res = await prismadb.projectsComments.create({
            data: {
                developerProjectId: id,
                comment: comment
            }
        })

        const data = prismadb.developerProject.update({
            where: {id: id},
            data:{
                comments: {
                    connect: {id: res.id}
                }
            }
        })


        return NextResponse.json({
            'message': 'success',
            'data': data
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})
    }

}