import NavWrapper from './components/nav-wrapper'

export default function ConsumerLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <NavWrapper>{children}</NavWrapper>
}
