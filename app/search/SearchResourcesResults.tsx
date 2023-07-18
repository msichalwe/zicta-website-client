import React from 'react'

interface Post {
	id: string
	title: string
	fileUrl: string
	// Add more properties if needed
}

interface SearchResultProps {
	posts: Post[]
}

const SearchResourcesResult: React.FC<SearchResultProps> = ({ posts }) => {
	return (
		<div className="space-y-4">
			{posts.map((post) => (
				<div
					key={post.id}
					onClick={() => window.open(post.fileUrl, '_blank')}
					className="flex p-3 gap-4 my-3 rounded-xl border-b border-gray-300 w-3/4 cursor-pointer">
					<div className="flex flex-col gap-2">
						<span className="text-xl font-semibold">{post.title}</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default SearchResourcesResult
