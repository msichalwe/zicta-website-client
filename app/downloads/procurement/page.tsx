'use client'
import SideMenu from '@/app/components/side-menu'
import React from 'react'
import { DataTable } from '../../../components/ui/data-table'
import { Separator } from '@radix-ui/react-separator'
import Heading from '@/app/components/Heading'
import { ResourceColumn, columns } from '../[resource]/components/columns'
import Footer from '@/app/components/footer'
import getProcurementType from '@/actions/getProcurementType'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Navbar from '@/app/components/navbar-new/Navbar'
import { Balancer } from 'react-wrap-balancer'
import Loader from '@/components/ui/loader'

const Procurement = () => {
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
				<Loader />
			</div>
		)
	}

	return (
		<>
			<Navbar />
			<div>
				<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px]  mb-20 flex items-center justify-center">
					<h1 className="sm:text-4xl text-2xl  text-white font-medium">
						<Balancer>Procurement</Balancer>
					</h1>
					<p className="max-w-4xl mt-5 text-lg text-white">
						<Balancer>
							Efficient Procurements Made Simple: Discover Seamless Acquisitions
							on Our Procurements Page, Whether you're a vendor interested in
							bidding for lucrative contracts or a stakeholder aiming to stay
							informed about the latest acquisitions, our Procurements Page
							offers a wealth of information at your fingertips.
						</Balancer>
					</p>
				</div>

				<div className="sm:w-5/6 w-full mx-auto mt-[10vh] px-2">
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
						<div className=" col-span-1 lg:col-span-2  space-y-4  h-screen">
							<Heading
								title="Procurement"
								description="Find all documents in relation to procurement below."
							/>
							<Separator />

							<Tabs defaultValue="tenders" className="w-full">
								<TabsList className="w-full h-full text-xs grid grid-cols-2 lg:grid-cols-3">
									<TabsTrigger className="text-xs" value="tenders">
										Tenders
									</TabsTrigger>
									<TabsTrigger
										className="text-xs"
										value="best_evaluated_bidder">
										Best Evaluated Bidder
									</TabsTrigger>
									<TabsTrigger className="text-xs" value="invitation_for_bids">
										Invitation For Bids
									</TabsTrigger>
									<TabsTrigger
										className="text-xs"
										value="request_for_clarifications">
										Request For Clarifications
									</TabsTrigger>
									<TabsTrigger className="text-xs" value="general_information">
										General Information
									</TabsTrigger>
									<TabsTrigger
										className="text-xs"
										value="annual_procurement_plan">
										Annual Procurement Plan
									</TabsTrigger>
								</TabsList>
								<TabsContent value="tenders">
									<DataTable
										columns={columns}
										data={formattedResource}
										searchKey="title"
									/>
								</TabsContent>
								<TabsContent value="best_evaluated_bidder">
									<DataTable
										columns={columns}
										data={formattedResource2}
										searchKey="title"
									/>
								</TabsContent>
								<TabsContent value="invitation_for_bids">
									<DataTable
										columns={columns}
										data={formattedResource6}
										searchKey="title"
									/>
								</TabsContent>
								<TabsContent value="request_for_clarifications">
									<DataTable
										columns={columns}
										data={formattedResource5}
										searchKey="title"
									/>
								</TabsContent>
								<TabsContent value="general_information">
									<DataTable
										columns={columns}
										data={formattedResource4}
										searchKey="title"
									/>
								</TabsContent>
								<TabsContent value="annual_procurement_plan">
									<DataTable
										columns={columns}
										data={formattedResource3}
										searchKey="title"
									/>
								</TabsContent>
							</Tabs>
						</div>
						<div className="col-span-1 hidden lg:block">
							<SideMenu />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Procurement
