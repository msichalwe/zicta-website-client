import { About } from '@/types'
import axios from 'axios'

const getAbout = async (): Promise<About> => {
	const res = await axios.get(`/api/about/64b50d94117e8ddcabebc84c`)
	return res.data
}

export default getAbout
