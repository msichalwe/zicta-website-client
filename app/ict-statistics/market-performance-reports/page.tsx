import Heading from '@/app/components/Heading'
import { DataTable } from '@/components/ui/data-table'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { format } from 'date-fns'
import { StatsColumn, columns } from '../components/columns'

const Page = () => {
    const formattedResource: StatsColumn[] = stats.map((data) => {
        const createdAt = data.createdAt ? new Date(data.createdAt) : null
        const formattedCreatedAt = createdAt
            ? format(createdAt, 'yyyy')
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
        <div className="gap-5">
            <div className="space-y-5">
                <Heading
                    title="Internet Service Providers Statistics"
                    description="Find all documents in relation to ISP statistics below."
                />
                <Separator />
            </div>
            {/* <MyResponsiveBar /> */}
            <DataTable columns={columns} data={formattedResource} searchKey="title" />
        </div>
    )
}

export default Page

const stats: Array<StatsColumn> = [
    {
        id: '1',
        title: '2021 Annual Market Report',
        file: '/market-reports/2021_Annual_Market_Report_ Public.pdf',
        createdAt: '2022-09-01T00:00:00.000Z',
    },
    {
        id: '2',
        title: '2022 Annual Market Report',
        file: '/market-reports/2022_Annual_Market_Report_Public.pdf',
        createdAt: '2023-09-01T00:00:00.000Z',
    },
    {
        id: '3',
        title: '2022 Mid-Year Market Report',
        file: '/public/market-reports/2022_Mid_Year_Market_Report.pdf',
        createdAt: '2022-09-01T00:00:00.000Z',
    },
    {
        id: '4',
        title: '2023 Mid-Year Market Report',
        file: '/public/market-reports/2023_Mid_Year_Market_Report.pdf',
        createdAt: '2023-09-01T00:00:00.000Z',
    },
    {
        id: '6',
        title: 'Press Release ICT Sector 2021 Mid-Year Market Report',
        file: '/market-reports/PRESS_RELEASE-ICT_SECTOR_2021_MID_YEAR_MARKET_REPORT.pdf',
        createdAt: '2021-09-01T00:00:00.000Z',
    },
    {
        id: '5',
        title: 'Press Release ICT Sector 2022 Annual Market Report',
        file: '/market-reports/PRESS_RELEASE-ICT_SECTOR_2022_ANNUAL_MARKET_REPORT.pdf',
        createdAt: '2023-09-01T00:00:00.000Z',
    },
]
