import React from 'react'

interface HeadingProps {
	title: string
	description: string
}
const Heading: React.FC<HeadingProps> = ({ title, description }) => {
	return (
		<div className="">
			<h2 className="text-3xl  font-bold track-tight">{title}</h2>
			<p className="text-sm text-muted-foreground">{description}</p>
		</div>
	)
}

export default Heading
