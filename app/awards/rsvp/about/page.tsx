import { DataTable } from '@/components/ui/data-table'
import React from 'react'
import { columns } from '../nomination/_components/columns'
import prisma from '@/lib/prismadb'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

const About = async () => {
	const categories = await prisma.awardCategory.findMany({
		orderBy: {
			name: 'asc',
		},
	})
	return (
		<>
			<Navbar />
			<div className=" h-full">
				<div className=" w-5/6 mx-auto mt-32 sm:mt-52">
					<h1 className="text-4xl font-bold tracking-tight mb-5 sm:mb-10 text-gray-900 sm:text-6xl">
						The Award Categories
					</h1>
					<DataTable columns={columns} data={categories} searchKey="name" />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About
