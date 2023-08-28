import Navbar from '@/app/components/navbar'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import { StatsColumn, columns } from './components/columns'
import { format } from 'date-fns'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import Footer from '@/app/components/footer'

const AnnualReports = () => {
	const formattedReports: StatsColumn[] = stats.map((data) => {
		const createdAt = data.createdAt ? new Date(data.createdAt) : null
		const formattedCreatedAt = createdAt
			? format(createdAt, 'MMMM do, yyyy')
			: ''

		return {
			id: data.id,
			title: data.title,
			// @ts-ignore
			file: data.file.toUpperCase(),
			createdAt: formattedCreatedAt,
		}
	})

	return (
		<div className="flex gap-10 w-full flex-col ">
			<Navbar />
			<div className="bg-gradient-to-l  to-zicta-blue from-[#7CA5B8]  w-full flex-col bg-cover  h-full sm:min-h-[400px] min-h-[200px] flex items-center justify-center">
				<h1 className="sm:text-4xl text-2xl  text-white font-medium">
					<Balancer>Annual Reports</Balancer>
				</h1>
				<p className="max-w-6xl mt-5 text-sm md:text-lg text-center text-white">
					<Balancer>
						Delve into ZICTA's Annual Reports: Unveiling a Year of Progress and
						Innovation. Download our comprehensive annual reports to gain
						insights into our achievements, initiatives, and milestones
						throughout the year. Explore our commitment to promoting
						technological advancement, regulatory excellence, and digital
						transformation. These downloadable reports provide a detailed
						overview of our efforts in shaping a thriving digital landscape for
						Zambia
					</Balancer>
				</p>
			</div>
			<div className="space-y-5 w-5/6 mx-auto">
				<Heading title="Annual Reports" description="" />
				<Separator />
				<DataTable
					columns={columns}
					data={formattedReports}
					searchKey="title"
				/>
			</div>
			<Footer />
		</div>
	)
}

export default AnnualReports

const stats: Array<StatsColumn> = [
	{
		id: '1',
		title: 'Annual Report 2021',
		file: '/files/annual-reports/2021.pdf',
		createdAt: '2022-08-03T00:00:00.000Z',
	},
	{
		id: '2',
		title: 'Annual Report 2020',
		file: '/files/annual-reports/2020.pdf',
		createdAt: '2022-04-05T00:00:00.000Z',
	},
	{
		id: '3',
		title: 'Annual Report 2019',
		file: '/files/annual-reports/2019.pdf',
		createdAt: '2020-10-12T00:00:00.000Z',
	},
	{
		id: '4',
		title: 'Annual Report 2018',
		file: '/files/annual-reports/2018.pdf',
		createdAt: '2020-10-10T00:00:00.000Z',
	},
	{
		id: '5',
		title: 'Annual Report 2017',
		file: '/files/annual-reports/2017.pdf',
		createdAt: '2020-10-07T00:00:00.000Z',
	},
	{
		id: '6',
		title: 'Annual Report 2016',
		file: '/files/annual-reports/2016.pdf',
		createdAt: '2020-09-28T00:00:00.000Z',
	},
	{
		id: '7',
		title: 'Annual Report 2015',
		file: '/files/annual-reports/2015.pdf',
		createdAt: '2020-09-03T00:00:00.000Z',
	},
	{
		id: '8',
		title: 'Annual Report 2014',
		file: '/files/annual-reports/2014.pdf',
		createdAt: '2020-09-03T00:00:00.000Z',
	},
	{
		id: '9',
		title: 'Annual Report 2013',
		file: '/files/annual-reports/2013.pdf',
		createdAt: '2020-09-03T00:00:00.000Z',
	},
]
