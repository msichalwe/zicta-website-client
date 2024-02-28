import prismadb from "@/lib/prismadb";


export async function getComments(id: string){
    const comments = await prismadb.developerProject.findUnique({where: {id: id}, include: {
            comments: true
        }});
    return comments?.comments
}