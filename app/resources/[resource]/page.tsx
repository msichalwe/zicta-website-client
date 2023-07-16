import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { DataTable } from '../../../components/ui/data-table'
import { ResourceColumn, columns } from './components/columns'
import Footer from '@/app/components/footer'
import SideMenu from '@/app/components/side-menu'
import getResource from '@/actions/getResources'
import ResourcesClient from './components/client'
import { format } from 'date-fns'

interface ReourcePageProps {
	params: {
		resource: string
	}
}
const Resource: React.FC<ReourcePageProps> = async ({ params }) => {
	const resource = await getResource(params.resource)

	const formattedResource: ResourceColumn[] = resource.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			format: data.fileType.toUpperCase(),
			createdAt: formattedCreatedAt,
		}
	})

	const title = params.resource.toUpperCase().replace(/-/g, ' ')

	return (
		<>
			<div className="sm:w-5/6 w-full mx-auto  my-[10vh] ">
				<div className="bg-circle bg-no-repeat px-2 w-full bg-cover flex-col space-y-4  h-full min-h-[400px] sm:rounded-xl mb-20 flex items-center justify-center">
					<h1 className="text-4xl text-white font-medium">{title}</h1>
				</div>
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3 h-full mb-10 mx-2">
					<div className=" col-span-1 lg:col-span-2  space-y-4">
						<Heading
							title={`${title}`}
							description={`Get all your ${title.toLowerCase()} in the table below.`}
						/>

						<ResourcesClient data={formattedResource} />
					</div>
					<div className="col-span-1 hidden lg:block">
						<SideMenu />
					</div>
				</div>
			</div>
		</>
	)
}

export default Resource
