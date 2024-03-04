'use client'

import {Project} from "@/app/dashboard/developer-projects/miscelleneous/types";
import {redirect, useRouter} from "next/navigation";
import Link from "next/link";
import {AlertModal} from "@/components/ui/modal/alert-modal";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-hot-toast";


export default function ProjectCard({project}: { project: Project }) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()


    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/developer-projects/${project.id}`)
            router.refresh()
            router.push(`/dashboard/developer-projects/`)
            toast.success('Successfully Deleted')
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }
    return (
        <  >


            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />

            <div className=" justify-center overflow-hidden py-6 sm:py-12">
                <div
                    className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span
                    className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-700 transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
            <span
                className="grid h-20 w-20 place-items-center rounded-full bg-blue-700 transition-all duration-300 group-hover:bg-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="h-10 w-10 text-white transition-all">
                    <rect x="4" y="5" width="16" height="16" rx="2" ry="2"></rect>
                    <line x1="16" y1="3" x2="16" y2="7"></line>
                    <line x1="8" y1="3" x2="8" y2="7"></line>
                    <line x1="4" y1="11" x2="20" y2="11"></line>
                    <line x1="12" y1="15" x2="12" y2="19"></line>
                    <line x1="1" y1="14" x2="23" y2="14"></line>
                    <line x1="12" y1="6" x2="12" y2="10"></line>
                </svg>
            </span>
                        <div className="pt-5 text-base  leading-7">
                            <p className="mb-1"><span className='font-semibold'>Project Name:</span> {project?.name}</p>
                            <p className="mb-1"><span className='font-semibold'>Status:</span> {project?.status}</p>
                            <p className="mb-1"><span
                                className='font-semibold'>Ends on:</span> {new Date(project?.endDate).toDateString()}
                            </p>
                            <div className="flex justify-between items-center">
                                <Button
                                    disabled={loading}
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => setOpen(true)}>
                                    <Trash className="h-4 w-4"/>
                                </Button>

                            </div>
                            <p>
                                <Link href={`/dashboard/developer-projects/${project.id}/view`}
                                      className="text-blue-700 transition-all duration-300 group-hover:text-white">See
                                    Project &rarr;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}