'use client'
import * as z from 'zod'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button} from '@/components/ui/button'

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '@/components/ui/form'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select'
import {Input} from '@/components/ui/input'
import {useParams, useRouter} from 'next/navigation'
import Heading from '@/app/dashboard/components/Heading'
import {Separator} from '@/components/ui/separator'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {Project, TeamMember, Task} from "@/app/dashboard/developer-projects/miscelleneous/types";
import {Textarea} from "@/components/ui/textarea";

const FormSchema = z.object({
    id: z.string({required_error: 'This field is required', invalid_type_error: 'An invalid type was entered'}),
    name: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    status: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    startDate: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    endDate: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    budget: z.coerce.number({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(0),
    fileURL: z.string(),
    description: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    publicUserImpact: z.coerce.number({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(0),
    institutionalImpact: z.coerce.number({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(0),
    rating: z.coerce.number({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(0),
    requestedBy: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    contactPerson: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
    department: z.string({
        required_error: 'This field is required',
        invalid_type_error: 'An invalid type was entered'
    }).min(1),
}).omit({id: true});


type DeveloperProjectsFormValues = z.infer<typeof FormSchema>


export const DeveloperProjectsForm = ({initialData, id}: { initialData: Project | null, id: string | null }) => {
    const params = useParams()
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [file, setFile] = useState(null);


    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };


    const defaultValues: any = initialData
        ? {...initialData, startDate: formatDate(initialData.startDate), endDate: formatDate(initialData.endDate,)}
        : {
            name: '',
            status: '',
            startDate: '',
            endDate: '',
            budget: 0,
            fileURL: '',
            publicUserImpact: 0,
            description: '',
            institutionalImpact: 0,
            rating: 0,
            requestedBy: '',
            contactPerson: '',
            department: '',

        }


    const form = useForm<DeveloperProjectsFormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultValues
    })

    const handleUpload = async (URL: string, file: File | null) => {
        if (!file) {
            alert('Please select a file to upload');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('files', file);

            // Send the file to the server
            return await axios.post(URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.error('Error uploading file:', error);
            toast.error('Something went wrong')
        }
    };


    const onSubmit = async (data: DeveloperProjectsFormValues) => {
        setLoading(true)


        try {
            let fileResponse;
            if (file) {
                fileResponse = await handleUpload('https://www.zicta.zm:448/api/submit-document', file);
            }
            let res;

            console.log(fileResponse)


            // if (initialData) {
            //     data = {...data, fileURL: file !== null ? fileResponse?.data.path : ''}
            //     res = await axios.put(`/api/developer-projects/${id}`, {
            //         ...data,
            //     },)
            // } else {
            //     data = {...data, fileURL: file !== null ? fileResponse?.data.path : ''}
            //     res = await axios.post(`/api/developer-projects/`, {
            //         ...data,
            //     },)
            // }


            // router.refresh()
            // if (res.data.message == 'success') {
            //     router.push(`/dashboard/developer-projects/${res.data.data.id}/tasks/create/`)
            // }
            toast.success('Successfully added')
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }


    }


    function formatDate(startDate: any): string | null {
        const now = new Date(startDate);
        const day = ("0" + now.getDate()).slice(-2);
        const month = ("0" + (now.getMonth() + 1)).slice(-2); // Add 1 to get the correct month number
        return now.getFullYear() + "-" + month + "-" + day;
    }


    return (
        <>

            <div className="flex items-center justify-between">
                <Heading title={initialData ? 'Edit Project' : 'Create Project'}
                         description={'Enter the project details below.'}/>


            </div>
            <Separator/>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full">
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="status"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select
                                        disabled={loading}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue
                                                    defaultValue={field.value}
                                                    placeholder="Select a category"
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value={'Pending'}>
                                                Pending
                                            </SelectItem>

                                            <SelectItem value={'Completed'}>
                                                Completed
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Start Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'date'}
                                            disabled={loading}
                                            placeholder="Start Date"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>End Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'date'}
                                            disabled={loading}
                                            placeholder="End Date"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="budget"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Budget</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'number'}
                                            disabled={loading}
                                            placeholder="Budget"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="publicUserImpact"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Public User Impact</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'number'}
                                            disabled={loading}
                                            placeholder="Public User Impact"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="institutionalImpact"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Institutional Impact</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'number'}
                                            disabled={loading}
                                            placeholder="Institutional Impact"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="rating"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Rating</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'number'}
                                            disabled={loading}
                                            placeholder="Rating"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="requestedBy"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Requested By</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'text'}
                                            disabled={loading}
                                            placeholder="Requested By"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="contactPerson"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Contact Person</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'text'}
                                            disabled={loading}
                                            placeholder="Contact Person"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="department"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Department</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'text'}
                                            disabled={loading}
                                            placeholder="department"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={'text'}
                                            disabled={loading}
                                            placeholder="Description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />


                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file"
                                   className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    {
                                        file ? <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">File selected</span></p> :
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Click to upload</span> or drag and drop</p>
                                    }

                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
                            </label>
                        </div>

                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">
                        {initialData ? 'Edit' : 'Add'}

                    </Button>
                </form>
            </Form>
        </>
    )
}

const options = {}
