import StatisticsWrapper from './components/stats'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<StatisticsWrapper>{children}</StatisticsWrapper>
			</body>
		</html>
	)
}
