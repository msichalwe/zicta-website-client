import React from 'react'
import { ResourceForm } from './components/resource-form'
import prisma from '@/lib/prismadb'

const FileClient = async ({ params }: { params: { fileId: string } }) => {
	const file = await prisma.licenceFiles.findUnique({
		where: {
			id: params.fileId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<ResourceForm initialData={file} />
			</div>
		</div>
	)
}

export default FileClient
