'use client'

import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {ConfirmModal} from "@/app/dashboard/developer-projects/components/confirm";
import {useRouter} from "next/navigation";
import axios from "axios";
import {TeamMember} from "@/app/dashboard/developer-projects/miscelleneous/types";


export default function Page({params}: { params: { id: string } }) {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

    const [member, setMember] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState<TeamMember[]>([]);


    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const router = useRouter()


    async function finish() {
        setLoading(true)


        try {
            const res = await axios.patch(`/api/developer-projects/${params.id}/team/`, {team: teamMembers})

            if (res.data.message === 'success') {
                router.refresh()
                router.push(`/dashboard/developer-projects/`)
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
        const newMember = {
            email: email,
            name: member,
        };


        let exists = teamMembers.find(member => member.name == newMember.name)
        if (exists) {
            toast.error('Cannot add same member')
            return;
        }


        if (member === '') {
            toast.error('Please enter correct task details')
        } else {
            setTeamMembers(prevMembers => [...prevMembers, newMember]);
        }

        setMember('');

    }


    const removeTask = (indexToRemove: number) => {
        setTeamMembers(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(indexToRemove, 1);
            return updatedTasks;
        });
    };


    useEffect(() => {

        async function getPossibleData() {

            setLoading(true)
            try {
                let response = await axios.get(`/api/developer-projects/${params.id}/team`);

                setTeamMembers(response.data.team)
            } catch (e) {
                toast.error('Something went wrong')
            } finally {
                setLoading(false)
            }

        }

        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get('/api/developer-projects/team/');
                setUsers(response.data)
                // Handle the response data here
            } catch (error) {
                console.log(error)
                // Handle errors
                toast.error('Something went wrong')

            } finally {
                setLoading(false)

            }

        };

        fetchData();
        getPossibleData()


        // Specify any dependencies if needed
    }, []);


    return (
        <>
            <ConfirmModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={() => {
                    router.refresh()
                    router.push(`/dashboard/developer-projects/`)
                    toast.error('Proceeding without team')
                }}
                text={'Are you sure you want to proceed without adding team members? Proceeding with a team helps make tasks easier. You can add them later'}
                loading={loading}
            />

            <div className='block  my-10'>
                <label htmlFor="first_name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team Members</label>
                <select disabled={loading} id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe" onChange={(e) => setMember(e.target.value)} value={member}
                        required>
                    <option selected>Select User</option>
                    {users.map((user) => <option value={user.email}>{user.email}</option>)}

                </select>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">


                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={addTask}>Add
                    Member
                </button>

                <button onClick={() => setOpen(true)} type="submit"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 disabled:bg-red-400"
                        disabled={teamMembers.length != 0}>Skip
                </button>


                <button onClick={finish} type="button"
                        className="text-gray-900 bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800 disabled:bg-green-300"
                        disabled={teamMembers.length === 0}>Finish
                </button>
            </div>


            {
                teamMembers.length === 0 ? '' : <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Action</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            teamMembers.map((task, index) =>
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">
                                        {task.email}
                                    </td>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {task.name}

                                    </th>


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

