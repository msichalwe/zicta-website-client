'use client'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Navbar from '@/app/components/nav'

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
			<QueryClientProvider client={queryClient}>
				<Toaster />
				{children}
			</QueryClientProvider>
		</div>
	)
}

export default Wrapper
