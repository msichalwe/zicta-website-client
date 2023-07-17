import { About } from '@/types'
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/about/64b50d94117e8ddcabebc84c`
const getAbout = async (): Promise<About> => {
	const res = await axios.get(`${URL}`)
	return res.data
}

export default getAbout
