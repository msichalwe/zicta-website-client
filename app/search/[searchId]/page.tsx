import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
	return (
		<div className="sm:w-5/6 w-full mx-auto mt-[10vh]">
			<div className="bg-peaks bg-no-repeat px-2 w-full bg-cover flex-col space-y-4  h-full min-h-[400px] sm:rounded-xl mb-20 flex items-center justify-center">
				<h1 className=" text-2xl sm:text-4xl max-w-3xl text-center  text-white font-bold">
					Find Information, Regulations and Services.
				</h1>
				<p className="text-xs text-center text-white font">
					Effortlessly find information, regulations, and services on the ZICTA
					website with our powerful search tool.
				</p>

				<form className=" w-96 md:w-full max-w-2xl">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<Input
							type="search"
							name="search"
							id="search"
							placeholder="Search..."
							className="relative h-12"
						/>
						<Button
							size="icon"
							variant="ghost"
							className="absolute border-none right-2.5 top-1 rounded">
							<SearchIcon className="h-5 w-5" />
						</Button>
					</div>
				</form>
			</div>
			{/* Search Results */}
			<div className="grid grid-cols"></div>
		</div>
	)
}

export default Search
