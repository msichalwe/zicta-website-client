import { Resource } from '@/types'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/resources`

const getResource = async (resource: string, id: string): Promise<Resource> => {
	const res = await fetch(`${URL}/${resource}/${id}`)

	return res.json()
}

export default getResource
