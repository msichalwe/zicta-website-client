import React from 'react'

const Services = () => {
	return (
		<div>
			<div className="w-5/6 mx-auto py-10 ">
				<div className="grid grid-cols-4 gap-5">
					{servicesData.map((item, index) => (
						<div
							key={index}
							style={{
								backgroundColor: item.color,
							}}
							className={` ${
								item.bgColor ? 'text-white' : 'text-gray-900'
							}  min-h-[20vh] flex justify-center items-start p-5  flex-col`}>
							<h1 className="font-medium uppercase">{item.title}</h1>
							<p className="text-sm">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Services

const servicesData = [
	{
		title: 'Licensing',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#313180',
		bgColor: true,
		image: '',
	},
	{
		title: 'Consumer Protection',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#C6EBBE',
		image: '',
	},
	{
		title: 'Spectrum Management',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#A9DBB8',
		image: '',
	},
	{
		title: 'Universal Access',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#7CA5B8',
		bgColor: true,
	},
	{
		title: 'Cyber Security',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#F7A072',
	},
	{
		title: 'Economic Regulation',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#7CA5B8',
		bgColor: true,
	},
	{
		title: 'Technical Regulation',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#C6EBBE',
	},
	{
		title: 'Postal & Courier',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		color: '#313180',
		bgColor: true,
	},
]
