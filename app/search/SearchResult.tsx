import React from 'react'

interface Post {
	id: string
	title: string
	description: string
	// Add more properties if needed
}

interface SearchResultProps {
	posts: Post[]
}

const SearchResult: React.FC<SearchResultProps> = ({ posts }) => {
	return (
		<>
			{posts.map((post) => (
				<div
					key={post.id}
					className="flex p-3 gap-4 my-3 rounded-xl border-b border-b-gray-300 w-3/4">
					<div className="flex flex-col gap-2">
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
