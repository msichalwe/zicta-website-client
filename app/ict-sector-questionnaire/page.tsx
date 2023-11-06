'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const ICTSector = () => {
	useEffect(() => {
		redirect('https://forms.office.com/r/V5eLCBtd6a?origin=lprLink')
	}, [])

	return null
}

export default ICTSector
