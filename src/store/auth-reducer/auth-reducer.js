import { createSlice } from '@reduxjs/toolkit'

const authReducer = createSlice({
	name: 'auth',
	initialState: {
		userData: {},
		isAuth: false,
		authError: null,
		registrationError: null,
	},
	reducers: {
		setIsAuth(state, action) {
			state.isAuth = action.payload.isAuth
		},
		setUserAuthData(state, action) {
			state.userData = action.payload
			state.isAuth = true
			state.authError = null
		},
		logout(state) {
			state.userData = {}
			state.isAuth = false
			localStorage.removeItem('authToken')
		},
		setAuthError(state, action) {
			state.authError = action.payload
		},
		setRegistrationError(state, action) {
			state.registrationError = action.payload
		},
		registrationSuccess(state, action) {
			state.registrationError = null
		},
	},
})

export const {
	setIsAuth,
	logout,
	setAuthError,
	setUserAuthData,
	registrationSuccess,
	setRegistrationError,
} = authReducer.actions

export default authReducer.reducer
