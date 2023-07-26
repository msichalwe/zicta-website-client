import { Search } from 'lucide-react'
import React from 'react'

const Button = () => {
	return (
		<button className="bg-zicta-blue text-white px-6 py-2 rounded flex">
			Search <Search className="ml-2 " />{' '}
		</button>
	)
}

export default Button
