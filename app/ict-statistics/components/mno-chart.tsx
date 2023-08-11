'use client'
import { ResponsiveBar } from '@nivo/bar'
import data from '@/data/mnoStats.json'

const MyResponsiveBar = () => (
	console.log(data),
	(
		<ResponsiveBar
			data={data}
			keys={[
				'Population',
				'Number of Active ISPs',
				'District (PoPs)',
				'Number of Subscribers',
				'Fixed Internet Penetration per 100',
				'Expartriates',
				'Female Employees',
				'Total Employees',
			]}
			indexBy="Year"
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
			valueScale={{ type: 'linear' }}
			indexScale={{ type: 'band', round: true }}
			colors={{ scheme: 'nivo' }}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: '#38bcb2',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: '#eed312',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: 'Population',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'Number of Active ISPs',
					},
					id: 'lines',
				},
			]}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Year',
				legendPosition: 'middle',
				legendOffset: 32,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'MNO Statistics',
				legendPosition: 'middle',
				legendOffset: -40,
			}}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: 'color',
				modifiers: [['darker', 1.6]],
			}}
			legends={[
				{
					dataFrom: 'keys',
					anchor: 'bottom-right',
					direction: 'column',
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: 'left-to-right',
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: 'hover',
							style: {
								itemOpacity: 1,
							},
						},
					],
				},
			]}
			role="application"
			ariaLabel="Nivo bar chart demo"
			barAriaLabel={(e) =>
				e.id + ': ' + e.formattedValue + ' in year: ' + e.indexValue
			}
		/>
	)
)

export default MyResponsiveBar
