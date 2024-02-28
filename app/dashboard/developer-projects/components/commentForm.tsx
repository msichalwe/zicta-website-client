'use client'
import {FormEvent, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";


export default function CommentForm({id}: {id: string}){
    const [comment, setComment] = useState('')
    const router = useRouter()
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e: FormEvent) {
        setLoading(true)
        e.stopPropagation()
        e.preventDefault()

        try {
            if (comment === '') {
                toast.error('Comment cannot be blank')
                return;
            } else {
                await axios.put(`/api/developer-projects/${id}/comments`, {id: id, comment: comment})

                router.refresh()
                toast.success('Successfully added')
            }
        } catch (e) {
            toast.error('An error occurred')

        } finally {
            setLoading(false)
            setComment('')

        }

    }

    return (
        <form className="mb-6" onSubmit={handleSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea disabled={loading} id="comment" rows={6} value={comment} onChange={(e)=>setComment(e.target.value)}
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..." required></textarea>
            </div>
            <button type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Comment
            </button>
        </form>
    )
}