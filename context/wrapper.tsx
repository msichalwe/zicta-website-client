'use client'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/state/store'

type WrapperProps = {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
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
