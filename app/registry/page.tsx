'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const Registry = () => {
	useEffect(() => {
		redirect('/')
	}, [])
	return null
}

export default Registry
