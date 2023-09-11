'use client'

import { useRouter } from 'next/navigation'

interface Post {
	id: string
	title: string
	description: string
	type: string
	// Add more properties if needed
}

interface SearchResultProps {
	posts: Post[]
	type: string
}

const SearchResult: React.FC<SearchResultProps> = ({ posts, type }) => {
	const router = useRouter()
	return (
		<>
			{posts.map((post) => (
				<div
					key={post.id}
					className="flex p-3 gap-4 my-3 rounded-xl cursor-pointer border-b border-b-gray-300 w-3/4">
					<div
						className="flex flex-col gap-2"
						onClick={() =>
							router.push(
								`/${
									type === 'media'
										? `press-room/${post.type
												.toLowerCase()
												.replace(/ /g, '-')}/${post.id}`
										: `services/${post.type.toLowerCase().replace(/ /g, '-')}`
								}`,
							)
						}>
						<span className="text-xl font-semibold">{post.title}</span>
						<span className="text-sm font-light text-gray-400 line-clamp-2 ">
							{post.description}
						</span>
					</div>
				</div>
			))}
		</>
	)
}
export default SearchResult
