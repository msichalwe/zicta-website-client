'use client'

import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const SearchInput = () => {
	const search = useSearchParams()
	const [searchQuery, setSearchQuery] = useState<string | null>(
		search ? search.get('q') : '',
	)
	const router = useRouter()

	const onSearch = (event: React.FormEvent) => {
		event.preventDefault()

		if (typeof searchQuery !== 'string') {
			return
		}

		const encodedSearchQuery = encodeURI(searchQuery)
		router.push(`/search?q=${encodedSearchQuery}`)
		setSearchQuery('')
	}

	return (
		<form onSubmit={onSearch} className="flex justify-center w-2/3 mx-auto">
			<div className="relative flex items-center">
				<input
					value={searchQuery || ''}
					onChange={(event) => setSearchQuery(event.target.value)}
					className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zicta-blue bg-white focus:bg-gray-100 rounded-full focus:outline-none focus:ring-[1px] focus:ring-gray-200 placeholder:text-zinc-400"
					placeholder="Search..."
				/>
				<button
					type="submit"
					className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-full bg-transparent hover:bg-zicta-blue-dark text-zinc-400 focus:outline-none">
					<Search className="h-4 w-4" />
				</button>
			</div>
		</form>
	)
}

export default SearchInput
