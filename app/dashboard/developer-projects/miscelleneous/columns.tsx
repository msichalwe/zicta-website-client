'use client'


import {ColumnDef} from "@tanstack/react-table";
import {Project} from "@/app/dashboard/developer-projects/miscelleneous/types";
import {ProjectCellAction} from "@/app/dashboard/developer-projects/miscelleneous/cellAction";



export const projectColumns: ColumnDef<Project>[] = [
    {
        accessorKey: 'name',
        header: 'Project Name',
    },
    {
        accessorKey: 'status',
        header: 'Project Status',
    },
    {
        accessorKey: 'budget',
        header: 'Project Budget(K)',
    },
    {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => <ProjectCellAction data={row.original} />,
    },


]