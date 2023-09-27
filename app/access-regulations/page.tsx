'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const AccessRegulations = () => {
	useEffect(() => {
		redirect('https://mforms.chalotek.com/app/form?id=M1vOWA')
	}, [])

	return null
}

export default AccessRegulations
