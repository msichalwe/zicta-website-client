import { Media } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/media`

const getMediaType = async (mediaType: any): Promise<Media[]> => {
	const res = await axios.get(`${URL}/${mediaType}`)

	return res.data
}

export default getMediaType
