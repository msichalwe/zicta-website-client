import {Project} from "@/app/dashboard/developer-projects/miscelleneous/types";
import prismadb from "@/lib/prismadb";



export async function getProject(id: string){
    return prismadb.developerProject.findUnique({where: {id: id}})
}