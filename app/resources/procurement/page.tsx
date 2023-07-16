'use client'
import SideMenu from '@/app/components/side-menu'
import React from 'react'
import { DataTable } from '../../../components/ui/data-table'
import { Separator } from '@radix-ui/react-separator'
import Heading from '@/app/components/Heading'
import { ResourceColumn, columns } from '../[resource]/components/columns'
import Footer from '@/app/components/footer'
import { Tabs } from 'antd'
import getProcurementType from '@/actions/getProcurementType'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

const { TabPane } = Tabs
const Procurement = () => {
	function callback(key: string) {
		console.log(key)
	}

	const { data: tenders, isLoading } = useQuery({
		queryKey: ['tendersData'],
		queryFn: async () => await getProcurementType('tenders'),
	})
	const { data: invitation_for_bids, isLoading: isInvitation_for_bids } =
		useQuery({
			queryKey: ['invitation_for_bids'],
			queryFn: async () => await getProcurementType('invitation_for_bids'),
		})
	const {
		data: request_for_clarifications,
		isLoading: isRequest_for_clarifications,
	} = useQuery({
		queryKey: ['request_for_clarifications'],
		queryFn: async () => await getProcurementType('request_for_clarifications'),
	})
	const { data: general_information, isLoading: isGeneral_information } =
		useQuery({
			queryKey: ['general_information'],
			queryFn: async () => await getProcurementType('general_information'),
		})
	const { data: best_evaluated_bidder, isLoading: isBidLoading } = useQuery({
		queryKey: ['best_evaluated_bidder'],
		queryFn: async () => await getProcurementType('best_evaluated_bidder'),
	})
	const {
		data: annual_procurement_plan,
		isLoading: isAnnual_procurement_plan,
	} = useQuery({
		queryKey: ['annual_procurement_plan'],
		queryFn: async () => await getProcurementType('annual_procurement_plan'),
	})

	const formattedResource: ResourceColumn[] =
		tenders?.map((data) => {
			const createdAt = data.createdAt ? new Date(data.createdAt) : null
			const formattedCreatedAt = createdAt
				? format(createdAt, 'MMMM do, yyyy')
				: ''

			return {
				id: data.id,
				title: data.title,
				format: data.fileType.toUpperCase(),
				createdAt: formattedCreatedAt,
			}
		}) || []
	const formattedResource2: ResourceColumn[] =
		best_evaluated_bidder?.map((data) => {
			const createdAt = data.createdAt ? new Date(data.createdAt) : null
			const formattedCreatedAt = createdAt
				? format(createdAt, 'MMMM do, yyyy')
				: ''

			return {
				id: data.id,
				title: data.title,
				format: data.fileType.toUpperCase(),
				createdAt: formattedCreatedAt,
			}
		}) || []
	const formattedResource3: ResourceColumn[] =
		annual_procurement_plan?.map((data) => {
			const createdAt = data.createdAt ? new Date(data.createdAt) : null
			const formattedCreatedAt = createdAt
				? format(createdAt, 'MMMM do, yyyy')
				: ''

			return {
				id: data.id,
				title: data.title,
				format: data.fileType.toUpperCase(),
				createdAt: formattedCreatedAt,
			}
		}) || []
	const formattedResource4: ResourceColumn[] =
		general_information?.map((data) => {
			const createdAt = data.createdAt ? new Date(data.createdAt) : null
			const formattedCreatedAt = createdAt
				? format(createdAt, 'MMMM do, yyyy')
				: ''

			return {
				id: data.id,
				title: data.title,
				format: data.fileType.toUpperCase(),
				createdAt: formattedCreatedAt,
			}
		}) || []
	const formattedResource5: ResourceColumn[] =
		request_for_clarifications?.map((data) => {
			const createdAt = data.createdAt ? new Date(data.createdAt) : null
			const formattedCreatedAt = createdAt
				? format(createdAt, 'MMMM do, yyyy')
				: ''

			return {
				id: data.id,
				title: data.title,
				format: data.fileType.toUpperCase(),
				createdAt: formattedCreatedAt,
			}
		}) || []
	const formattedResource6: ResourceColumn[] =
		invitation_for_bids?.map((data) => {
			const createdAt = data.createdAt ? new Date(data.createdAt) : null
			const formattedCreatedAt = createdAt
				? format(createdAt, 'MMMM do, yyyy')
				: ''

			return {
				id: data.id,
				title: data.title,
				format: data.fileType.toUpperCase(),
				createdAt: formattedCreatedAt,
			}
		}) || []

	if (
		isLoading ||
		isBidLoading ||
		isAnnual_procurement_plan ||
		isGeneral_information ||
		isInvitation_for_bids ||
		isRequest_for_clarifications
	) {
		return (
			<div className="h-screen w-full flex items-center justify-center">
				<p>Loading...</p>
			</div>
		)
	}

	return (
		<>
			<div className="sm:w-5/6 w-full mx-auto mt-[10vh] px-2">
				<div className="bg-circle bg-no-repeat px-2 w-full bg-cover flex-col space-y-4  h-full min-h-[400px] sm:rounded-xl mb-20 flex items-center justify-center">
					<h1 className="text-4xl text-white font-medium">Procurements</h1>
				</div>
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
					<div className=" col-span-1 lg:col-span-2  space-y-4  h-screen">
						<Heading
							title="Procurement"
							description="Find all documents in relation to procurement below."
						/>
						<Separator />

						<Tabs defaultActiveKey="tenders" onChange={callback}>
							<TabPane tab="Tenders" key="tenders">
								<DataTable
									columns={columns}
									data={formattedResource}
									searchKey="title"
								/>
							</TabPane>
							<TabPane tab="Best Evaluated Bidder" key="best_evaluated_bidder">
								<DataTable
									columns={columns}
									data={formattedResource2}
									searchKey="resourceName"
								/>
							</TabPane>
							<TabPane tab="Invitation For Bids" key="invitation_for_bids">
								<DataTable
									columns={columns}
									data={formattedResource6}
									searchKey="resourceName"
								/>
							</TabPane>
							<TabPane
								tab="Request For Clarifications"
								key="request_for_clarifications">
								<DataTable
									columns={columns}
									data={formattedResource5}
									searchKey="resourceName"
								/>
							</TabPane>
							<TabPane tab="General Information" key="general_information">
								<DataTable
									columns={columns}
									data={formattedResource4}
									searchKey="resourceName"
								/>
							</TabPane>
							<TabPane
								tab="Annual Procurement Plan"
								key="annual_procurement_plan">
								<DataTable
									columns={columns}
									data={formattedResource3}
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
