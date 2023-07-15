const URL = `${process.env.NEXT_PUBLIC_API_URL}/what-we-do`

const getWhatWeDo = async (): Promise<WhatWeDo> => {
	const res = await fetch(URL)

	return res.json()
}

export default getWhatWeDo
