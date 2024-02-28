import {NextRequest, NextResponse} from "next/server";

const users = [
    {
        email: 'emma@gmail.com',
        'name': 'Emmanuel Chilombo',
    },
    {
        email: 'chiso@gmail.com',
        'name': 'Chisomo Chilombo',
    },
    {
        email: 'aaa@gmail.com',
        'name': 'Andrew Chilombo',
    },
]


export async function GET(){


    return NextResponse.json(users)
}