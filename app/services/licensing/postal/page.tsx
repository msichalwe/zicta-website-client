import React from 'react'
import { LicensesColumn, columns } from '../components/columns'
import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'

const Postal = () => {
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
					title="Postal Licences"
					description="The following are the list of Postal Licence documents"
				/>
				<Separator />
			</div>
			<DataTable columns={columns} data={formattedResource} searchKey="title" />
		</div>
	)
}

export default Postal

const stats: Array<LicensesColumn> = [
	{
		id: '1',
		title: ' ZICTA - Application for a Postal Service Licence',
		file: '/files/application_postal_service_licence.doc',
	},
	{
		id: '2',
		title: 'ZICTA - Postal Application Guide',
		file: '/files/postal_application_guide.docx',
	},
	{
		id: '3',
		title: 'ZICTA - Postal Application Requirements',
		file: '/files/postal_application_requirements.docx',
	},
	{
		id: '4',
		title: 'ICT Fee Schedule',
		file: '/files/ict_fees_schedule.pdf',
	},
]
