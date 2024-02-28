'use client'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import { Edit, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { columns } from './components/columns'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export const revalidate = 0
const Management = () => {
	const router = useRouter()

	const { data, isLoading } = useSWR('/api/about/management', fetcher)

	if (isLoading) {
		return <div>Loading...</div>
	}
	console.log('🚀 ~ file: route.ts:16 ~ Management ~ data:', data)

	return (
		<div className="flex-col ">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<div className="flex items-center justify-between">
					<Heading title={`Executive Management`} description={``} />
					<Button
						onClick={() =>
							router.push(
								`/dashboard/about/management/64b50d94117e8ddcabebc84c`,
							)
						}>
						<Plus className="mr-2 h-4 w-4" />
						Add
					</Button>
				</div>
				<Separator />
				<DataTable columns={columns} data={data} searchKey="name" />
			</div>
		</div>
	)
}

export default Management
