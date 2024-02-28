import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";


export async function DELETE(request: NextRequest, {params}: { params: { id: string } }) {

    const session = getServerSession(authOptions)


    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {
        let data = await prismadb.developerProject.delete({where: {id: params.id}})


        return NextResponse.json({
            'message': 'success',
            'data': data
        })
    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})
    }

}

export async function PUT(request: NextRequest, {params}: { params: { id: string } }) {

    const session = getServerSession(authOptions)

    if (!session) {
        return new NextResponse('Unauthorized', {status: 401})
    }

    try {
        let body = await request.json()

        console.log(body)
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

        if (fileURL !== null) {
            const data = {
                name,
                status,
                startDate,
                endDate,
                budget,
                publicUserImpact,
                description,
                institutionalImpact,
                rating,
                requestedBy,
                contactPerson,
                department,
                fileURL,

            }

            let res = await prismadb.developerProject.update({where: {id: params.id}, data: data})

            return NextResponse.json({
                'message': 'success',
                'data': res
            })


        } else {
            const data = {
                name,
                status,
                startDate,
                endDate,
                budget,
                publicUserImpact,
                description,
                institutionalImpact,
                rating,
                requestedBy,
                contactPerson,
                department
            }

            let res = await prismadb.developerProject.update({where: {id: params.id}, data: data})


            return NextResponse.json({
                'message': 'success',
                'data': res
            })
        }


    } catch (e) {
        console.log(e, 'POST MEDIA ERROR')
        return new NextResponse('Internal Error', {status: 500})
    }

}



