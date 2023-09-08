import getServices from '@/actions/getServices'

const Postal = async () => {
	const service = await getServices('postal-courier')
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10  ">
				<div className="flex items-start justify-center space-y-2  flex-col">
					<h1 className="text-3xl font-bold text-center">Postal & Courier</h1>
					<p>{service.description}</p>
				</div>
				<div>
					<img
						src={service.imageUrl}
						alt="postal"
						className="w-full h-full object-cover rounded"
					/>
				</div>
			</div>
		</div>
	)
}

export default Postal
