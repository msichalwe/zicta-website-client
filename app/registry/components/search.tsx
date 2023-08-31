'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
		router.push(`/registry/dealer-certificates?q=${encodedSearchQuery}`)
		setSearchQuery('')
	}

	return (
		<form onSubmit={onSearch} className="">
			<div className="relative w-4/6 ">
				<Input
					value={searchQuery || ''}
					onChange={(event) => setSearchQuery(event.target.value)}
					className="w-full"
					placeholder="Search..."
				/>
				<Button
					type="submit"
					size={'icon'}
					className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-full bg-transparent hover:bg-zicta-blue-dark text-zinc-400 focus:outline-none">
					<Search className="h-4 w-4" />
				</Button>
			</div>
		</form>
	)
}

export default SearchInput
