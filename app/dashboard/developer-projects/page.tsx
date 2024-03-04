import ProjectCard from "@/app/dashboard/developer-projects/components/card";
import Link from "next/link";
import {getProjects} from "@/app/dashboard/developer-projects/actions/getProjects";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Project} from "@/app/dashboard/developer-projects/miscelleneous/types";
import {
    getProjectCompleted,
    getProjectTotal,
    getTotalBudget,
    getTotalPending
} from "@/app/dashboard/developer-projects/actions/totals";
import React, {Suspense} from "react";
import Heading from "@/app/dashboard/components/Heading";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {columns} from "@/app/dashboard/media/[mediaType]/components/columns";
import {DataTable} from "@/components/ui/data-table";
import {ColumnDef} from "@tanstack/react-table";
import {projectColumns} from "@/app/dashboard/developer-projects/miscelleneous/columns";
import CategoriesClient from "@/app/dashboard/categories/components/client";
import CardDataStats from "@/app/dashboard/developer-projects/components/statistics";


export default async function Page() {
    const data: Project[] = await getProjects()
    const totalBudget = await getTotalBudget();
    const projectTotal = await getProjectTotal();
    const completedProjects = await getProjectCompleted();
    const pendingProjects = await getTotalPending();
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
                <Suspense fallback={<LoadingSkeleton/>}>
                    <div className="flex items-center justify-between">
                        <Heading
                            title={`Developer Projects (${projectTotal})`}
                            description={`Manage current projects`}
                        />
                        <Link
                            href={'/dashboard/developer-projects/create'}
                            className="inline-flex items-center bg-gray-800 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <Plus className="h-4 w-4"/>
                            <span className="ml-2">Add New</span>
                        </Link>


                    </div>

                    {/*<Link className="bg-gray-950 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded my-4" > Add Project</Link>*/}

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7 my-4">

                        <CardDataStats title="Total Budget" total={`K${totalBudget}`}/>
                        <CardDataStats title="Total Projects" total={`${projectTotal}`}/>
                        <CardDataStats title="Completed Projects" total={`${completedProjects}`}/>
                        <CardDataStats title="Pending Projects" total={`${pendingProjects}`}/>

                    </div>


                    <DataTable columns={projectColumns} data={data} searchKey="name"/>


                    {/*<div className="grid grid-cols-3 gap-4">*/}
                    {/*{*/}
                    {/*    data.map((project) => <ProjectCard key={project.id}  project={project}/>)*/}
                    {/*}*/}

                    {/*</div>*/}


                </Suspense>
            </div>
        </div>

    )
}


const LoadingSkeleton = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 ">
                <div className="w-60 my-6">
                    <div className="bg-gray-200 h-16 animate-pulse"></div>
                    <div className="bg-gray-200 h-20 animate-pulse mt-2"></div>
                </div>
                <div className="w-60 my-6">
                    <div className="bg-gray-200 h-16 animate-pulse"></div>
                    <div className="bg-gray-200 h-20 animate-pulse mt-2"></div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="w-60 my-6">
                    <div className="bg-gray-200 h-40 animate-pulse"></div>
                </div>
                <div className="w-60 my-6">
                    <div className="bg-gray-200 h-40 animate-pulse"></div>
                </div>
                <div className="w-60 my-6">
                    <div className="bg-gray-200 h-40 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

