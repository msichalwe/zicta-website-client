'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import SearchInput from '../components/search'
import { Button } from '@/components/ui/button'

interface Organization {
	name: string
}

interface DealerCertificate {
	licenseId: string
	expiresAt: Date
	issuedAt: Date
	organization: Organization
}

const fetchCertificates = async (url: string) => {
	const res = await fetch(url)

	if (!res.ok) {
		throw new Error('Failed to fetch certificates')
	}

	return res.json() as Promise<DealerCertificate[]>
}

const DealerCertificates = () => {
	const [page, setPage] = useState(1)
	const search = useSearchParams()
	const searchQuery = search ? search.get('q') : null
	const router = useRouter()

	const encodedSearchQuery = encodeURI(searchQuery || '')

	const { data, error, isLoading } = useSWR<DealerCertificate[]>(
		`${process.env.NEXT_PUBLIC_APPLICATION_API_URL}/dealer-license/search?q=${encodedSearchQuery}&page=${page}`,
		fetchCertificates,
		{ revalidateOnFocus: false },
	)
	if (error) {
		// Handle error if needed
		console.error('Failed to fetch search results:', error)
	}

	return (
		<div className="w-5/6 mx-auto md:w-full min-h-[50vh]">
			<div className="space-y-5">
				<h1 className="text-2xl font-semibold text-gray-700">
					List of Registered Dealers
				</h1>
				<SearchInput />
			</div>
			{isLoading && <div>Loading...</div>}
			{data && data.length > 0 && (
				<>
					<div className="mt-4 overflow-x-auto min-h-[20vh]">
						<table className="w-full whitespace-nowrap">
							<thead>
								<tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
									<th className="px-4 py-3">Organization Name</th>
									<th className="px-4 py-3">License ID</th>
									<th className="px-4 py-3">Validity Date</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y">
								{data.map((certificate) => (
									<tr key={certificate.licenseId} className="text-gray-700">
										<td className="px-4 py-3">
											{certificate.organization.name}
										</td>
										<td className="px-4 py-3">{certificate.licenseId}</td>
										<td className="px-4 py-3">
											{new Date(certificate.expiresAt).toLocaleDateString()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="flex justify-end mt-4 space-x-2">
						<Button
							variant={'outline'}
							size={'sm'}
							disabled={page === 1}
							onClick={() => setPage(page > 1 ? page - 1 : 1)}>
							Previous
						</Button>
						<Button
							variant={'outline'}
							size={'sm'}
							disabled={data.length < 10}
							onClick={() => setPage(page + 1)}>
							Next
						</Button>
					</div>
				</>
			)}
			{data && data?.length === 0 && (
				<div className="flex justify-center mt-4">
					<div className="text-center">
						<h1 className="text-2xl font-semibold text-gray-700">
							No results found
						</h1>
						<p className="mt-2 text-sm text-gray-500">
							Please try a different search query
						</p>
						<button
							className="px-4 py-2 mt-4 font-semibold text-zicta-blue"
							onClick={() => router.push('/registry/dealer-certificates')}>
							Back to search
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default DealerCertificates
