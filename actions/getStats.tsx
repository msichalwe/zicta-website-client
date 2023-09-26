import { Stats } from '@/types'

const URL = `/api/stats`

const getStats = async (): Promise<Stats> => {
	const res = await fetch(URL)

	return res.json()
}

export default getStats
