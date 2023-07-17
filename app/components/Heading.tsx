import React from 'react'
import { Balancer } from 'react-wrap-balancer'

interface HeadingProps {
	title: string
	description: string
}
const Heading: React.FC<HeadingProps> = ({ title, description }) => {
	return (
		<div className="">
			<h2 className="text-3xl text-zicta-blue  font-bold track-tight">
				<Balancer>{title}</Balancer>
			</h2>
			<p className="text-sm text-muted-foreground">
				<Balancer>{description}</Balancer>
			</p>
		</div>
	)
}

export default Heading
