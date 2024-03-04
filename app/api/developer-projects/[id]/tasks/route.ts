import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";
import {Task} from "@/app/dashboard/developer-projects/miscelleneous/types";


export async function PATCH(request: NextRequest, {params}: { params: { id: string } }) {
    const session = getServerSession(authOptions)

    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    const {tasks} = await request.json();



    try {

        const projectId = params.id; // Assuming projectId comes from params.id

        // Fetch the project by its ID
        const res = await prismadb.developerProject.update({
            where: {
                id: projectId,
            },
            data: {
                tasks: tasks
            }
        });



        return NextResponse.json({
            'message': 'success',
            'data': res
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})
    }
}

export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const session = getServerSession(authOptions)

    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {
        const data = await prismadb.developerProject.findFirst({where: {id: params.id},})
        return NextResponse.json({
            'message': 'success',
            'tasks': data?.tasks
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})

    }
}


