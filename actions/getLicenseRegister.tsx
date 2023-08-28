import { LicenseRegister } from '@/types'
import axios from 'axios'
const URL = `${process.env.NEXT_PUBLIC_API_URL}/licensing-register`

const getLicenseRegister = async (): Promise<LicenseRegister[]> => {
	const res = await axios.get(`${URL}`)

	return res.data
}

export default getLicenseRegister
