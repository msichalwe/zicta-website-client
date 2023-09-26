import { Testimonial } from '@/types'
import axios from 'axios'

const getTestimonial = async (): Promise<Testimonial> => {
	const res = await axios.get(`/api/testimonial`)
	return res.data
}

export default getTestimonial
