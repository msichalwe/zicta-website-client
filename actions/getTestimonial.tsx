import { Testimonial } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/testimonial`

const getTestimonial = async (): Promise<Testimonial> => {
	const res = await fetch(URL)

	return res.json()
}

export default getTestimonial
