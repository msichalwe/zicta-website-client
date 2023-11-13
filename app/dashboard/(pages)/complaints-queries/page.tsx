import { format } from 'date-fns'
import prisma from '@/lib/prismadb'
import ComplaintsClient from './components/client'

export const revalidate = 0

const ComplaintsQueries = async () => {
	const complaints = await prisma.complaints.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	const formattedComplaints = complaints.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			name: data.name,
			subject: data.subject,
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<ComplaintsClient data={formattedComplaints} />
			</div>
		</div>
	)
}

export default ComplaintsQueries
