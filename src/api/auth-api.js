import { instanceAxios } from './api-config'

export const authAPI = {
	registration: async (userData) => {
		if (!userData.password) {
			userData['password'] = 'auth-google'
		}
		return await instanceAxios
			.post('/auth/registration', { ...userData })
			.then((data) => data.data)
	},

	login: async (email, password) => {
		return await instanceAxios
			.post('/auth/login', { email, password })
			.then((data) => data.data)
	},
	auth: async () => {
		return await instanceAxios
			.get('/auth/authorization')
			.then((data) => data.data)
	},
}
