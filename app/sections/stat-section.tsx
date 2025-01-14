'use client'
import { Stat, Stats } from '@/types'
import React, { useLayoutEffect, useRef } from 'react'
import CountUp from 'react-countup'

import VisibilitySensor from 'react-visibility-sensor'

const stats = [
	{ id: 1, name: 'Happy Consumers', value: '3700', showPlus: true },
	{ id: 2, name: 'Simcards Deactivated', value: '205000', showPlus: true },
	{ id: 3, name: 'Regulator Awards Won', value: '3', showPlus: false },
	{ id: 4, name: 'Total Employees', value: '387', showPlus: false },
]

const formatValue = (value: any) => {
	if (value >= 1000) {
		const formattedValue = (value / 1000).toFixed(1)
		const intValue = parseInt(formattedValue)
		return `${
			intValue === parseFloat(formattedValue) ? intValue : formattedValue
		}K`
	}
	return value
}

interface StatProps {
	data: Stats
}
const StatSection: React.FC<StatProps> = ({ data }) => {
	return (
		<div className="bg-hero-pattern bg-no-repeat bg-cover py-32">
			<div className="mx-auto max-w-3xl text-center mb-20">
				<h2 className="text-base font-semibold leading-8 text-indigo-400">
					Our track record
				</h2>
				<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					{data.title}
				</p>
				<p className="mt-6 text-lg leading-8 text-gray-300">
					{data.description}
				</p>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
					{data.stat.map((stat: Stat) => (
						<div
							key={stat.id}
							className="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
								<VisibilitySensor>
									{({ isVisible }: { isVisible: boolean }) => (
										<CountUp
											end={isVisible ? parseFloat(stat.value) : 0}
											duration={2.5}
											separator=","
											suffix={stat.showPlus ? '+' : ''}
											formattingFn={formatValue}
										/>
									)}
								</VisibilitySensor>
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

export default StatSection
