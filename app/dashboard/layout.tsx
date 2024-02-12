import WrapperContext from '../../context/wrapper'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <WrapperContext>{children}</WrapperContext>
}
