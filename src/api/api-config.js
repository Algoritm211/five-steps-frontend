import axios from 'axios'

export const instanceAxios = axios.create({
	baseURL: 'http://localhost:5000/api/',
	headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
})
