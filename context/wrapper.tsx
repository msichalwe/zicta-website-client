'use client'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'

type WrapperProps = {
	children: React.ReactNode
}

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
			<Toaster />
			{children}
		</div>
	)
}

export default Wrapper
