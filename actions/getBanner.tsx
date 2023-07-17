import { Banner } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/banner`

const getBanner = async (): Promise<Banner> => {
	const res = await fetch(URL)

	return res.json()
}

export default getBanner
