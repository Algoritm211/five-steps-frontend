import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth } from './store/auth-reducer/auth-selector'
import { isAppReady } from './store/app-reducer/app-selector'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import Login from './Login/Login'
import { authUser } from './store/auth-reducer/auth-thunks'

function App() {
	const dispatch = useDispatch()

	const isAuth = useSelector(getIsAuth)
	const isReady = useSelector(isAppReady)

	useEffect(() => {
		dispatch(authUser())
	}, [])

	return (
		<div className='App'>
			<Switch>
				<Route path={'/profile'} component={() => <div>Profile</div>} />
				<Route path={'/main'} component={MainPage} />
				<Route path={'/login'} component={Login} />
				<Redirect to={'/main'} />
			</Switch>
		</div>
	)
}

export default App
