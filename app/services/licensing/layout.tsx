import NavWrapper from './components/nav-wrapper'

export default function LicensingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <NavWrapper>{children}</NavWrapper>
}
