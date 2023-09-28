import React from 'react'
import { ProcurementForm } from './components/procurement-form'
import prisma from '@/lib/prismadb'

export const revalidate = 0

const ProcurementPage = async ({
	params,
}: {
	params: { procurementId: string }
}) => {
	const procurement = await prisma.procurement.findUnique({
		where: {
			id: params.procurementId,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<ProcurementForm initialData={procurement} />
			</div>
		</div>
	)
}

export default ProcurementPage
