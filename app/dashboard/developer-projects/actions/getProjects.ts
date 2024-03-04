import prisma from "@/lib/prismadb";
import {Project} from "@/app/dashboard/developer-projects/miscelleneous/types";




export async function getProjects(){
    return await prisma.developerProject.findMany({});
}
//
