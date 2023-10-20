import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import prisma from '@/lib/prismadb'
import NominationForm from './_components/nomination-form'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './_components/columns'

export const revalidate = 0

const Nomination = async () => {
	const categories = await prisma.awardCategory.findMany({
		orderBy: {
			name: 'asc',
		},
	})
	return (
		<>
			<Navbar />
			<div className="min-h-[80vh] bg-slate-100 pb-12">
				<div className="px-6 pt-24 pb-12 sm:py-32 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Nominations
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Don't miss this opportunity to honor excellence! Fill in the
							nomination form below and make sure your favorite candidates get
							the recognition they deserve. Your voice matters, and your
							nomination could make all the difference. Join us in shaping the
							future of these sectors with your nominations!
						</p>
					</div>
				</div>
				<div className=" w-5/6 bg-white shadow rounded p-6 md:w-3/6 mx-auto ">
					<NominationForm
						options={categories.map((category) => ({
							label: category.name,
							value: category.id,
						}))}
					/>
				</div>

				<div className="w-5/6 mx-auto my-10 space-y-4">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900">
						Award Categories
					</h2>
					<DataTable columns={columns} data={categories} searchKey="name" />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Nomination
