import React from 'react'

const Projects = () => {
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
				<div>
					<img
						src={'/assets/projects-postal.jpg'}
						alt="projects-postal"
						className="w-full h-full object-cover rounded"
					/>
				</div>
				<div className="flex items-start justify-center space-y-2 flex-col ">
					<h1 className="text-4xl font-medium">Projects</h1>
					<p>
						In order to enhance efficiency of postal and courier services in
						Zambia, the Authority embarks on various initiatives, the most
						significant being the National Addressing and Postcode Project. This
						project is aimed at ensuring that each property has an address to
						which postal and courier services can be delivered. The Authority
						collaborates with city or municipal councils to implement this
						project. The project is expected to contribute greatly to the
						development of the country’s e-commerce.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Projects
