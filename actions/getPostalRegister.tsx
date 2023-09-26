import { PostalRegister } from '@/types'
import axios from 'axios'
const URL = `/api/registered-postal`

const getPostalRegister = async (): Promise<PostalRegister[]> => {
	const res = await axios.get(`${URL}`)

	return res.data
}

export default getPostalRegister
