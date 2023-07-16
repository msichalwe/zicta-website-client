import { Media } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/media`

const getMedia = async (mediaType: string, mediaId: string): Promise<Media> => {
	const res = await axios.get(`${URL}/${mediaType}/${mediaId}`)

	return res.data
}

export default getMedia
