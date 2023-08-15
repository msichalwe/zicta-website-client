'use client'
import React from 'react'
import Navbar from '../components/navbar-new/Navbar'
import { Balancer } from 'react-wrap-balancer'
import MyResponsiveBar from './components/mno-chart'

const Statistics = () => {
	return (
		<div className="h-screen w-full">
			<MyResponsiveBar />
		</div>
	)
}

export default Statistics
