import React from 'react'
import { LicensesColumn, columns } from '../components/columns'
import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'

const NetworkService = () => {
	const formattedResource: LicensesColumn[] = stats.map((data) => {
		return {
			id: data.id,
			title: data.title,
			// @ts-ignore
			file: data.file.toUpperCase(),
		}
	})

	return (
		<div className="gap-5">
			<div className="space-y-5">
				<Heading
					title="Network & Service Licence"
					description="The following are the list of Network & Service Licence documents"
				/>
				<Separator />
			</div>
			<DataTable columns={columns} data={formattedResource} searchKey="title" />
		</div>
	)
}

export default NetworkService

const stats: Array<LicensesColumn> = [
	{
		id: '1',
		title: 'Application for Network Licence',
		file: '/files/application_for_network_licence.docx',
	},
	{
		id: '2',
		title: 'Application Procedure',
		file: '/files/application_process.pdf',
	},
	{
		id: '3',
		title: 'ZICTA - Service Licence Application Guide',
		file: '/files/service-licence_application_guide.docx',
	},
	{
		id: '4',
		title: 'ZICTA - Application for a Service Licence',
		file: '/files/application_for_service_licence.docx',
	},
	{
		id: '5',
		title: 'ZICTA - Network Application Guide',
		file: '/files/network_application_guide.docx',
	},
]
