import { Hero } from '@/types'

const URL = `/api/hero`

const getHero = async (): Promise<Hero> => {
	const res = await fetch(URL)

	return res.json()
}

export default getHero
