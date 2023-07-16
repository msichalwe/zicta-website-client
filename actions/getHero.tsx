import { Hero } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/hero`

const getHero = async (): Promise<Hero> => {
	const res = await fetch(URL)

	return res.json()
}

export default getHero
