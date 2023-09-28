import getServices from '@/actions/getServices'

const TechnicalRegulation = async () => {
	const service = await getServices('technical-regulation')
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10  ">
				<div className="flex items-start justify-center space-y-2  flex-col">
					<h1 className="text-3xl font-bold text-center">
						Technical Regulation
					</h1>
					<p>{service?.description}</p>
				</div>
				<div>
					<img
						// @ts-ignore
						src={service?.imageUrl}
						alt="techincal-regulation"
						className="w-full h-full object-cover rounded"
					/>
				</div>
			</div>
		</div>
	)
}

export default TechnicalRegulation
