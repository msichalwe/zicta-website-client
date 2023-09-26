import StatisticsWrapper from './components/stats'

export default function StatisticsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <StatisticsWrapper>{children}</StatisticsWrapper>
}
