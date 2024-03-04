'use client'

import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {ConfirmModal} from "@/app/dashboard/developer-projects/components/confirm";
import {useRouter} from "next/navigation";
import axios from "axios";
import {Task} from "@/app/dashboard/developer-projects/miscelleneous/types";





export default function Page({params }: { params: { id: string }, data: Task[] | null }) {
    const [tasks, setTasks] = useState<Task[]>([])

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()


    useEffect(() => {
        async function getPossibleData(){
            setLoading(true)
            try {
                let response = await axios.get(`/api/developer-projects/${params.id}/tasks`);

                setTasks(response.data.tasks)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }


        }

        getPossibleData()


    }, []);





    async function finish() {
        setLoading(true)


        try {
            const res = await axios.patch(`/api/developer-projects/${params.id}/tasks/`, {tasks: tasks})

            if (res.data.message === 'success') {
                router.refresh()
                router.push(`/dashboard/developer-projects/${params.id}/team/`)
                toast.success('Successfully added tasks')
            } else {
                toast.error('Something went wrong')

            }
        } catch (e) {
            toast.error('Something went wrong')

        } finally {
            setLoading(false)

        }

    }


    function addTask() {
        const newTask = {
            name: taskName,
            description: taskDescription,
            status: false
        } as Task;

        if (taskName === '' || taskDescription === '') {
            toast.error('Please enter correct task details')
        } else {
            setTasks(prevTasks => [...prevTasks, newTask]);
        }

        setTaskName('');
        setTaskDescription('');

    }


    const removeTask = (indexToRemove: number) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(indexToRemove, 1);
            return updatedTasks;
        });
    };


    return (
        <>
            <ConfirmModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                    router.refresh()
                    router.push(`/dashboard/developer-projects/`)
                    toast.error('Proceeding without tasks')
                }}
                text={'Are you sure you want to proceed without tasks? Tasks make it easier to track your project. You can add them later'}
                loading={loading}
            />

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                    <input disabled={loading} type="text" id="first_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Finish dashboard" onChange={(e) => setTaskName(e.target.value)} value={taskName}
                           required/>
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task
                        Description</label>
                    <input disabled={loading} onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} type="text"
                           id="last_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Finish the dashboard" required/>
                </div>


                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={addTask}>Add
                    Task
                </button>

                <button onClick={() => setOpen(true)} type="submit"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 disabled:bg-red-400"
                        disabled={tasks.length != 0}>Skip
                </button>


                <button onClick={finish} type="button"
                        className="text-gray-900 bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800 disabled:bg-green-300"
                        disabled={tasks.length === 0}>Finish
                </button>
            </div>


            {
                tasks.length === 0 ? '' : <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Task Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Action</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            tasks.map((task, index) =>
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {task.name}

                                    </th>
                                    <td className="px-6 py-4">
                                        {task.description}
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => removeTask(index)}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove
                                        </button>
                                    </td>
                                </tr>)

                        }

                        </tbody>
                    </table>
                </div>
            }


        </>


    )
}

