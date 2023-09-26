'use client'
import React from 'react'
import MNOChart from './components/mno-chart'
import Heading from '../components/Heading'

const Statistics = () => {
	return (
		<div className="space-y-2 w-full h-full md:mb-[60rem]">
			<Heading
				title="Overiew of ICT Statistics"
				description="General overiew of some of the ICT Statistics."
			/>
			<div className="min-h-[50vh] md:min-h-0 md:h-[50vh]  space-y-5 p-2">
				<MNOChart keyValue={'Number of Subscribers'} />
				<MNOChart keyValue={'Fixed Internet Penetration per 100'} />
				<MNOChart keyValue={'Number of Active ISPs'} />
			</div>
		</div>
	)
}

export default Statistics
