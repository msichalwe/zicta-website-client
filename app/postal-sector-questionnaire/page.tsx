'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const PostalSector = () => {
	useEffect(() => {
		redirect('https://forms.office.com/r/R5VZUQRm3J')
	}, [])

	return null
}

export default PostalSector
