import { authAPI } from '../../api/auth-api'
import { setAppReady } from '../app-reducer/app-reducer'
import {
	registrationSuccess,
	setAuthError,
	setIsAuth,
	setRegistrationError,
	setUserAuthData,
} from './auth-reducer'

export const registerUser = (email, password) => async (dispatch) => {
	try {
		const data = await authAPI.registration(email, password)

		dispatch(registrationSuccess())
		dispatch(loginUser(email, password))
	} catch (error) {
		console.log(error)
		dispatch(setRegistrationError(error.response.data.message))
	}
}

export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch(setAppReady(false))
		const data = await authAPI.login(email, password)
		await localStorage.setItem('authToken', data.token)
		dispatch(setUserAuthData(data.user))
		window.location.reload()
		dispatch(setAppReady(true))
	} catch (error) {
		dispatch(setAuthError(error.response.data.message))
		dispatch(setAppReady(true))
	}
}

export const authUser = () => async (dispatch) => {
	try {
		dispatch(setAppReady(false))
		const data = await authAPI.auth()
		dispatch(setUserAuthData(data.user))
		localStorage.setItem('authToken', data.token)
		dispatch(setAppReady(true))
	} catch (error) {
		console.log(error)
		localStorage.removeItem('authToken')
		setIsAuth({ isAuth: false })
		setAuthError(error.response.data.message)
		// alert(error.response.data.message)
		dispatch(setAppReady(true))
	} finally {
		dispatch(setAppReady(true))
	}
}
