import React from 'react'
import { CategoryForm } from './components/category-form'
import prisma from '@/lib/prismadb'

const CategoriesPage = async ({
	params,
}: {
	params: { categoryId: string }
}) => {
	const category = await prisma.category.findUnique({
		where: {
			id: params.categoryId,
		},
	})

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<CategoryForm initialData={category} />
			</div>
		</div>
	)
}

export default CategoriesPage
