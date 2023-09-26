'use client'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/state/store'
import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'

type WrapperProps = {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}
	return (
		<div>
			<Provider store={store}>
				<SessionProvider>
					<QueryClientProvider client={queryClient}>
						<Toaster />
						{children}
					</QueryClientProvider>
				</SessionProvider>
			</Provider>
		</div>
	)
}

export default Wrapper
