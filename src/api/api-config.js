import axios from 'axios'

export const instanceAxios = axios.create({
	baseURL: process.env.BASE_URL,
	headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
})
