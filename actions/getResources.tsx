const URL = `${process.env.NEXT_PUBLIC_API_URL}/resources`

const getResource = async (resource: string): Promise<Resource[]> => {
	const res = await fetch(`${URL}/${resource}`)

	return res.json()
}

export default getResource
