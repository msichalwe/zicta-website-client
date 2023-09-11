import { PostalRegister } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/registered-postal`

const getPostalRegister = async (): Promise<PostalRegister[]> => {
	const res = await axios.get(`${URL}`)

	return res.data
}

export default getPostalRegister
