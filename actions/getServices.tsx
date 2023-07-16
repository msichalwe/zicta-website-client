import { Service } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/service`

const getServices = async (serviceType: string): Promise<Service> => {
	const res = await axios.get(`${URL}/${serviceType}`)

	return res.data
}

export default getServices
