'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import SearchResult from './SearchResult'
import SearchInput from './SearchInput'
import SearchResourcesResult from './SearchResourcesResults'
import Loader from '@/components/ui/loader'
import Navbar from '../components/navbar'

interface Post {
	id: string
	title: string
	description: string
	type: string
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
		<>
			<Navbar />
			<div className="flex gap-10 w-full mt-16 flex-col">
				<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8] p-10  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px] space-y-6 mb-20 flex items-center justify-center">
					<h1 className=" text-2xl sm:text-4xl max-w-3xl text-center  text-white font-bold">
						Find Information, Regulations and Services.
					</h1>
					<p className="text-xs text-center text-white font">
						Effortlessly find information, regulations, and services on the
						ZICTA website with our powerful search tool.
					</p>

					<div className=" w-full">
						<SearchInput />
					</div>
				</div>

				{/* Search Results */}
				<div className="w-full md:w-5/6 md:mx-auto">
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
									{data.media.length > 0 && (
										<SearchResult type="media" posts={data.media} />
									)}
									{data.services.length > 0 && (
										<SearchResult type="service" posts={data.services} />
									)}
									{data.resources.length > 0 && (
										<SearchResourcesResult posts={data.resources} />
									)}
								</>
							)}
						</>
					) : (
						<div className="w-full flex items-center justify-center">
							<Loader />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Search
