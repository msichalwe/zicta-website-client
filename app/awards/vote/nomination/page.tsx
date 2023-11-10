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
			<div className="w-full min-h-screen h-full relative mt-20">
				<video
					src={'/assets/awards.mp4'}
					autoPlay
					loop
					muted
					className="object-cover w-full h-full absolute top-0 left-0 z-[-1]"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)]" />
				<div className=" absolute w-full h-full top-0 bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2 gap-5 ">
					<div className="px-6 py-10 lg:px-8 flex items-center justify-center flex-col">
						<div className="mx-auto max-w-4xl text-center  ">
							<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
								Nominations
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-100">
								Don't miss this opportunity to honor excellence! Fill in the
								nomination form and make sure your favorite candidates get the
								recognition they deserve. Your voice matters, and your
								nomination could make all the difference. Join us in shaping the
								future of these sectors with your nominations!
							</p>
						</div>
					</div>
					<div className="w-full md:w-5/6 mx-auto flex items-center justify-center">
						<NominationForm
							options={categories.map((category) => ({
								label: category.name,
								value: category.id,
								description: category.description,
								criteria: category.criteria,
							}))}
						/>
					</div>
				</div>
			</div>
			<div className="hidden md:block">
				<Footer />
			</div>
		</>
	)
}

export default Nomination
