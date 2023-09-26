import { Banner } from '@/types'

const URL = `/api/banner`

const getBanner = async (): Promise<Banner> => {
	const res = await fetch(URL)

	return res.json()
}

export default getBanner
