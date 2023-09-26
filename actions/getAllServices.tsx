import { Service } from '@/types'
import axios from 'axios'
const URL = `/api/service`

const getAllServices = async (): Promise<Service[]> => {
	const res = await axios.get(`${URL}`)

	return res.data
}

export default getAllServices
