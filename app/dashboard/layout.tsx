import WrapperContext from '../../context/Wrapper'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <WrapperContext>{children}</WrapperContext>
}
