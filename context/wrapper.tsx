'use client'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Navbar from '@/app/components/nav'
import { Provider } from 'react-redux'
import { store } from '@/state/store'

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
				<QueryClientProvider client={queryClient}>
					<Toaster />
					{children}
				</QueryClientProvider>
			</Provider>
		</div>
	)
}

export default Wrapper
