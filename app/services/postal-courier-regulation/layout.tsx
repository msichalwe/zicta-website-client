import NavWrapper from './components/nav-wrapper'

export default function PostalLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <NavWrapper>{children}</NavWrapper>
}