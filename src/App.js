import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth } from './store/auth-reducer/auth-selector'
import { isAppReady } from './store/app-reducer/app-selector'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import Login from './Login/Login'

function App() {
	const dispatch = useDispatch()

	const isAuth = useSelector(getIsAuth)
	const isReady = useSelector(isAppReady)

	return (
		<div className='App'>
			<Switch>
				<Route path={'/profile'} component={() => <div>Profile</div>} />
				<Route path={'/main'} component={MainPage} />
				<Redirect to={'/main'} />
			</Switch>
		</div>
	)
}

export default App
