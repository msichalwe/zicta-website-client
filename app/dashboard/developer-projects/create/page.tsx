
// ...
// import { useFormState } from 'react-dom';
// import {submitAction} from "@/app/dashboard/developer-projects/actions/submitAction";
// import {createProject, submitAction} from "@/app/dashboard/developer-projects/actions/submitAction";


import {DeveloperProjectsForm} from "@/app/dashboard/developer-projects/components/DeveloperProjectsForm";

export default function Page(){

    return <div>
       <DeveloperProjectsForm initialData={null} id={null}/>

    </div>
}