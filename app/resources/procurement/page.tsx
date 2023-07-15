'use client'
import SideMenu from '@/app/components/side-menu'
import React from 'react'
import { DataTable } from '../[resource]/components/data-table'
import { Separator } from '@radix-ui/react-separator'
import Heading from '@/app/components/Heading'
import { columns } from '../[resource]/components/columns'
import Footer from '@/app/components/footer'
import { Tabs } from 'antd'

const { TabPane } = Tabs
const Procurement = () => {
	function callback(key: string) {
		console.log(key)
	}

	return (
		<>
			<div className="sm:w-5/6 w-full mx-auto mt-[10vh]">
				<div className="bg-circle bg-no-repeat px-2 w-full bg-cover flex-col space-y-4  h-full min-h-[400px] sm:rounded-xl mb-20 flex items-center justify-center">
					<h1 className="text-4xl text-white font-medium">
						Procurement Page Name
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
					<div className=" col-span-1 lg:col-span-2  space-y-4  h-screen">
						<Heading title="Resource" description="Resource Description" />
						<Separator />

						<Tabs defaultActiveKey="1" onChange={callback}>
							<TabPane tab="Tab 1" key="1">
								tab 1
								<DataTable
									columns={columns}
									data={ResourceData}
									searchKey="resourceName"
								/>
							</TabPane>
							<TabPane tab="Tab 2" key="2">
								tab 2
								<DataTable
									columns={columns}
									data={ResourceData}
									searchKey="resourceName"
								/>
							</TabPane>
						</Tabs>
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

export default Procurement

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
