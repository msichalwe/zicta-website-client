import React from 'react'
import CategoriesClient from './components/client'
import prisma from '@/lib/prismadb'
import { CategoriesColumn } from './components/columns'
import { format } from 'date-fns'

const Category = async () => {
	const categories = await prisma.category.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	const formattedCatgories: CategoriesColumn[] = categories.map((category) => {
		const createdAt = category.createdAt ? new Date(category.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: category.id,
			title: category.title,
			description: category.description,
			createdAt: formattedCreatedAt,
		}
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 px-20 pt-6 mx-auto">
				<CategoriesClient data={formattedCatgories} />
			</div>
		</div>
	)
}

export default Category
