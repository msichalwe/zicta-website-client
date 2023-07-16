import { Procurement } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/procurementType`

const getProcurementType = async (
	procurementType: any,
): Promise<Procurement[]> => {
	const res = await axios.get(`${URL}/${procurementType}`)

	return res.data
}

export default getProcurementType
