import {ColumnDef} from "@tanstack/react-table";
import {CellAction} from "@/app/dashboard/media/[mediaType]/components/cell-action";
import {MediaColumn} from "@/app/dashboard/media/[mediaType]/components/columns";

export type Task = {
    id: string
    name: string,
    description: string,
    status: boolean
}


export type TeamMember = {
    email: string,
    name: string,
}

export type Comment = {
    id: string
    comment: string,
}


export type Project = {
    id: string
    name: string
    status: string
    description: string
    startDate: string | Date;
    endDate: string | Date;
    budget: number;
    team?: any | Array<TeamMember>;
    tasks?: any | Array<TeamMember>
    fileURL?: string
    publicUserImpact?: number
    institutionalImpact?: number
    rating?: number
    requestedBy?: string
    contactPerson?: string
    department?: string
    comments?: Comment[]
}

