'use client'
import { RegistryColumn, columns } from '../components/columns'
import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import Loader from '@/components/ui/loader'

export const revalidate = 0
const DealerRegistry = async () => {
	const { data: dealerRegistry, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_APPLICATION_API_URL}/registered-dealers`,
		fetcher,
	)

	if (isLoading) return <Loader />

	const formattedRegistry: RegistryColumn[] = dealerRegistry.map(
		(data: any) => {
			return {
				id: data.id,
				sn: data.SN,
				licence_number: data.LICENCE_NUMBER,
				dealer: data.DEALER,
			}
		},
	)
	return (
		<div className="w-5/6 mx-auto">
			<div className="space-y-5">
				<Heading
					title={`Dealer Registry (${dealerRegistry.length})`}
					description="The Authority periodically updates this list of all licensed dealers for the benefit of customers who would like to access their services"
				/>
				<Separator />
			</div>
			<DataTable
				columns={columns}
				data={formattedRegistry || []}
				searchKey="dealer"
			/>
		</div>
	)
}

export default DealerRegistry
