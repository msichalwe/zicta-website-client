import NavWrapper from './components/NavWrapper'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<NavWrapper>{children}</NavWrapper>
			</body>
		</html>
	)
}
