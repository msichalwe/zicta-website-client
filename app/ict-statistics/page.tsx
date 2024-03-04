'use client'
import React from 'react'
import MNOChart from './components/mno-chart'
import Heading from '../components/Heading'
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import InternetSubs from "@/app/ict-statistics/components/charts/internetSubs";
import Overview from "@/app/ict-statistics/components/charts/overview";
import MobileDomestic from "@/app/ict-statistics/components/charts/mobileDomestic";
import AverageRevenuePerUser from "@/app/ict-statistics/components/charts/averageUser";



const Statistics = () => {
	return (
		<div className="space-y-2 w-full h-full md:mb-[60rem]">
			<Heading
				title="Overiew of ICT Statistics"
				description="General overiew of some of the ICT Statistics."
			/>
			<div className="hidden md:block min-h-[90vh] md:min-h-0 md:h-[90vh]  space-y-5 p-2">

				<Overview/>
				<InternetSubs/>
				<MobileDomestic/>
				<AverageRevenuePerUser/>

				{/*<MNOChart keyValue={'Number of Subscribers'} />*/}
				{/*<MNOChart keyValue={'Fixed Internet Penetration per 100'} />*/}
				{/*<MNOChart keyValue={'Number of Active ISPs'} />*/}
			</div>

		</div>
	)
}

export default Statistics







