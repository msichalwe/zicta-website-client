import NavWrapper from './components/nav-wrapper'

export default function TechnicalLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <NavWrapper>{children}</NavWrapper>
}
