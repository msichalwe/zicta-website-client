'use client'
import { Wrapper } from '@googlemaps/react-wrapper'
import React, { useEffect, useRef } from 'react'

const mapOptions = {
	center: { lat: -15.4238, lng: 28.3113 },
	zoom: 14,
	disableDefaultUI: true,
	clickableIcons: false,
}

const MapSection = () => {
	return (
		<Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			<MyMap />
		</Wrapper>
	)
}

const MyMap = () => {
	const ref = useRef()

	useEffect(() => {
		const map = new window.google.maps.Map(ref.current, mapOptions)
		const marker = new window.google.maps.Marker({
			position: mapOptions.center,
			map: map,
			title: 'ZICTA',
		})
	}, [])

	return <div ref={ref} className="h-[40vh] w-full"></div>
}

export default MapSection
