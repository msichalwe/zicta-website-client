import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";


export async function PATCH(request: NextRequest, { params }: { params: { id: string }}){
    const session = getServerSession(authOptions)

    if (!session) {
        return new NextResponse('Unauthorized', { status: 401 })
    }

    const {team} = await request.json();



    try {

        let res = await prismadb.developerProject.update({
            where: {id: params.id},
            data: {
                team: team
            }
        })

        return NextResponse.json({
            'message': 'success',
            'data': res
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', { status: 500 })
    }


}


export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const session = getServerSession(authOptions)

    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {
        const data = await prismadb.developerProject.findFirst({where: {id: params.id}})
        return NextResponse.json({
            'message': 'success',
            'team': data?.team
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})

    }
}
