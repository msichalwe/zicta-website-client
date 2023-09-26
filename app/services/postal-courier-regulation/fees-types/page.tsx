import React from 'react'

const FeesTypes = () => {
	return (
		<div className="w-5/6 mx-auto">
			<table className="w-full">
				<thead>
					<tr>
						<th className="p-4 bg-zicta-blue text-xl text-white">
							<h1 className="font-bold uppercase">License Type and fees</h1>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="p-2">
							{' '}
							<h3 className="font-medium text-lg">1. Reserved</h3>{' '}
						</td>
					</tr>
					<tr>
						<td className="p-2">Public Postal Operator</td>
					</tr>
					<tr>
						<td className="p-2">
							Public Postal Operator Licence – K75, 000.00 (0.5% on AGR*) (25
							Years)
						</td>
					</tr>
					<tr>
						<td className="p-2">No Application Fee</td>
					</tr>
					<tr>
						<td className="p-2  "></td>
					</tr>
					<tr>
						<td className="p-2">
							<h3 className="font-medium text-lg">2. Unreserved</h3>
						</td>
					</tr>
					<tr>
						<td className="p-2">
							a. International & Domestic Courier Licence- K30, 000.00 (1% on
							ARG*)(5 years)
						</td>
					</tr>
					<tr>
						<td className="p-2">
							b. Domestic Courier Licence – K10,000.00 (1% on ARG*) (5 Years)
						</td>
					</tr>
					<tr>
						<td className="p-2">
							c. Local Courier Licence- K5000 (1% on ARG*) (5 Years)
						</td>
					</tr>
					<tr>
						<td className="p-2">
							Application Fee- <span className="font-medium">K2000.1 </span>
						</td>
					</tr>
					<tr>
						<td className="p-2 font-medium text-sm">
							AGR* - Annual Gross Revenue
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default FeesTypes
