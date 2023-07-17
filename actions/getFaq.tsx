import { Faq } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/faq`

const getFaqs = async (): Promise<Faq[]> => {
	const res = await axios.get(`${URL}`)

	return res.data
}

export default getFaqs
