import getPostalRegister from '@/actions/getPostalRegister'
import { PostalRegistryColumn, columns } from '../components/columns'
import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'

const PostalRegistry = async () => {
	const postalRegistry = await getPostalRegister()

	const formattedRegistry: PostalRegistryColumn[] = postalRegistry.map(
		(data) => {
			return {
				id: data.id,
				orderedId: data.orderedId,
				operator: data.operator,
				licenceNumber: data.licenceNumber,
				type: data.type,
			}
		},
	)
	return (
		<div className="w-5/6 mx-auto">
			<div className="space-y-5">
				<Heading
					title={`Postal & Courier Registry (${postalRegistry.length})`}
					description="The Authority periodically updates this list of all licensed operators for the benefit of customers who would like to access the service"
				/>
				<Separator />
			</div>
			<DataTable
				columns={columns}
				data={formattedRegistry || []}
				searchKey="operator"
			/>
		</div>
	)
}

export default PostalRegistry