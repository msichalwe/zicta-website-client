import CommentForm from "@/app/dashboard/developer-projects/components/commentForm";
import {getComments} from "@/app/dashboard/developer-projects/actions/getComments";


export default async function Comments({id}: {id: string}){
    const comments = await getComments(id)

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased"  >
            <div className="max-w-2xl mx-auto px-4" >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments </h2>
                </div>

                <CommentForm id={id}/>

                {
                   comments != null ?  comments.map((comment) => <article key={comment.id} className="p-2 text-base bg-white rounded-lg dark:bg-gray-900">
                       <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
                   </article>) : ''
                }


            </div>
        </section>
    )
}