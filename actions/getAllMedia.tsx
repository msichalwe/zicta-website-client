import { Media } from '@/types'
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/media`

const getAllMedia = async (): Promise<Media[]> => {
	const res = await axios.get(`${URL}`)
	const media = res.data.slice(0, 3) // Get the first three media posts

	return media
}

export default getAllMedia
