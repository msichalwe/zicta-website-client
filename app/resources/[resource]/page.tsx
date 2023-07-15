import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import Footer from '@/app/components/footer'
import SideMenu from '@/app/components/side-menu'

const Resource = () => {
	return (
		<>
			<div className="sm:w-5/6 w-full mx-auto mt-[10vh]">
				<div className="bg-circle bg-no-repeat px-2 w-full bg-cover flex-col space-y-4  h-full min-h-[400px] sm:rounded-xl mb-20 flex items-center justify-center">
					<h1 className="text-4xl text-white font-medium">
						Resource Page Name
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
					<div className=" col-span-1 lg:col-span-2  space-y-4  h-screen">
						<Heading title="Resource" description="Resource Description" />
						<Separator />
						<DataTable
							columns={columns}
							data={ResourceData}
							searchKey="resourceName"
						/>
					</div>
					<div className="col-span-1 hidden lg:block">
						<SideMenu />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Resource

const ResourceData = [
	{
		id: '1',
		resourceName: 'Resource 1',
		createdAt: '2021-09-01',
	},
	{
		id: '2',
		resourceName: 'Resource 2',
		createdAt: '2021-09-01',
	},
	{
		id: '3',
		resourceName: 'Resource 3',
		createdAt: '2021-09-01',
	},
	{
		id: '4',
		resourceName: 'Resource 4',
		createdAt: '2021-09-01',
	},
	{
		id: '5',
		resourceName: 'Resource 5',
		createdAt: '2021-09-01',
	},
]
