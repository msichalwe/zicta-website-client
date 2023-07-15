const URL = `${process.env.NEXT_PUBLIC_API_URL}/stats`

const getStats = async (): Promise<Stats> => {
	const res = await fetch(URL)

	return res.json()
}

export default getStats
