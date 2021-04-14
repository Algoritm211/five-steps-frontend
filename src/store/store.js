import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './app-reducer/app-reducer'
import authReducer from './auth-reducer/auth-reducer'

const rootReducer = combineReducers({
	appReducer: appReducer,
	authReducer: authReducer,
})

const store = configureStore({
	reducer: rootReducer,
})

window.__store__ = store

export default store
