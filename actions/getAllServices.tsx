import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/service`

const getAllServices = async (): Promise<Service[]> => {
	const res = await axios.get(`${URL}`)

	return res.data
}

export default getAllServices
