import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Toaster />
		</>
	)
}

export default Layout
