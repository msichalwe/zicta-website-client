'use client'
import { CSVDownload, CSVLink } from 'react-csv'

interface CSVButtonProps {
	data: any
	name: string
}

const CSVButton: React.FC<CSVButtonProps> = ({ data, name }) => {
	return (
		<div>
			<CSVLink
				className="bg-zicta-blue px-4 py-2 text-white rounded"
				data={data}
				filename={name}>
				Export CSV
			</CSVLink>
		</div>
	)
}

export default CSVButton
