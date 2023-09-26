import { WhatWeDo } from '@/types'

const URL = `/api/what-we-do`

const getWhatWeDo = async (): Promise<WhatWeDo> => {
	const res = await fetch(URL)

	return res.json()
}

export default getWhatWeDo
