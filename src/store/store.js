import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './app-reducer/app-reducer'
import authReducer from './auth-reducer/auth-reducer'
import coursesReducer from './courses-reducer/courses-reducer'
import articlesReducer from './articles-reducer/articles-reducer'

const rootReducer = combineReducers({
	appReducer: appReducer,
	authReducer: authReducer,
	coursesReducer: coursesReducer,
	articlesReducer: articlesReducer
})

const store = configureStore({
	reducer: rootReducer,
})

window.__store__ = store

export default store
