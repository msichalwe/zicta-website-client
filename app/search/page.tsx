'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import Spinner from '../components/Spinner'
import SearchResult from './SearchResult'
import SearchInput from './SearchInput'
import SearchResourcesResult from './SearchResourcesResults'

interface Post {
	id: string
	title: string
	description: string
	fileUrl: string
	// Add more properties if needed
}

interface SearchData {
	resources: Post[]
	services: Post[]
	procurement: Post[]
	media: Post[]
	// Add more arrays if needed
}

const fetchPosts = async (url: string) => {
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error('Failed to fetch posts')
	}

	return response.json() as Promise<SearchData>
}

const Search: React.FC = () => {
	const search = useSearchParams()
	const searchQuery = search ? search.get('q') : null
	const router = useRouter()

	const encodedSearchQuery = encodeURI(searchQuery || '')

	const { data, error } = useSWR<SearchData>(
		`${process.env.NEXT_PUBLIC_API_URL}/search?q=${encodedSearchQuery}`,
		fetchPosts,
		{ revalidateOnFocus: false },
	)

	if (error) {
		// Handle error if needed
		console.error('Failed to fetch search results:', error)
	}

	return (
		<div className="sm:w-5/6 w-full mx-auto my-[5vh] min-h-screen">
			<div className="bg-peaks bg-no-repeat px-2 w-full  bg-cover flex-col space-y-4  h-full min-h-[400px] sm:rounded-xl mb-20 flex items-center justify-center">
				<h1 className=" text-2xl sm:text-4xl max-w-3xl text-center  text-white font-bold">
					Find Information, Regulations and Services.
				</h1>
				<p className="text-xs text-center text-white font">
					Effortlessly find information, regulations, and services on the ZICTA
					website with our powerful search tool.
				</p>

				<div className=" w-full">
					<SearchInput />
				</div>
			</div>

			{/* Search Results */}
			<>
				{data ? (
					<>
						{data.resources.length === 0 &&
						data.services.length === 0 &&
						data.procurement.length === 0 &&
						data.media.length === 0 ? (
							<div>No Results Found</div>
						) : (
							<>
								{/* Using SearchResult component for each type of data */}
								{data.media.length > 0 && <SearchResult posts={data.media} />}
								{data.services.length > 0 && (
									<SearchResult posts={data.services} />
								)}
								{data.resources.length > 0 && (
									<SearchResourcesResult posts={data.resources} />
								)}
							</>
						)}
					</>
				) : (
					<div className="w-full flex items-center justify-center">
						<Spinner />
					</div>
				)}
			</>
		</div>
	)
}

export default Search
