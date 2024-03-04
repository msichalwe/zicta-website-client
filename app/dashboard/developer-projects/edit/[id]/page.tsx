


import {DeveloperProjectsForm} from "@/app/dashboard/developer-projects/components/DeveloperProjectsForm";
import {getProject} from "@/app/dashboard/developer-projects/actions/getProject";

export default async function Page({params}: {params: {id: string}}){
    const project = await getProject(params.id)
    return <div>
        <DeveloperProjectsForm initialData={project} id={params.id}/>
    </div>
}