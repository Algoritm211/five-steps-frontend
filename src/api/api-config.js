import axios from 'axios'

export const instanceAxios = axios.create({
	baseURL: `${process.env.REACT_APP_URL}/api/`,
	headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
})
