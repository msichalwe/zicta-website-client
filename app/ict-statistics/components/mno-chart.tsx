'use client'
import { ResponsiveBar } from '@nivo/bar'
import data from '@/data/mnoStats.json'

type MNOChartProps = {
	keyValue: string
}

const MNOChart: React.FC<MNOChartProps> = ({ keyValue }) => (
	<ResponsiveBar
		data={data}
		keys={[keyValue]}
		indexBy="Year"
		margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
		padding={0.5}
		valueScale={{ type: 'linear' }}
		indexScale={{ type: 'band', round: true }}
		colors={{ scheme: 'paired' }}
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
					id: 'Number of Subscribers',
				},
				id: 'dots',
			},
			{
				match: {
					id: 'Fixed Internet Penetration per 100',
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
			tickRotation: 90,
			legend: 'Year',
			legendPosition: 'middle',
			legendOffset: 45,
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'MNO Statistics',
			legendPosition: 'middle',
			legendOffset: -50,
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
				anchor: 'top',
				direction: 'row',
				justify: false,
				translateX: -50,
				translateY: -36,
				itemWidth: 100,
				itemHeight: 20,
				itemsSpacing: 2,
				symbolSize: 20,
				itemDirection: 'left-to-right',
			},
		]}
		role="application"
		ariaLabel="Nivo bar chart demo"
		barAriaLabel={(e) =>
			e.id + ': ' + e.formattedValue + ' in year: ' + e.indexValue
		}
	/>
)

export default MNOChart
