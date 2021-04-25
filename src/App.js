import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth } from './store/auth-reducer/auth-selector'
import { isAppReady } from './store/app-reducer/app-selector'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authUser } from './store/auth-reducer/auth-thunks'
import Registration from './Auth/Registration'
import Login from './Auth/Login'
import MyProf from './components/MyProfession/MyProf';
import MyProfile from './components/MyProfile/MyProfile';

import CoursesContainer from './components/CoursesContainer/CoursesContainer'
import MySettings from './components/MySettings/MySettings'
import LessonPage from './components/LessonPage/LessonPage'
import Blog from './components/Blog/Blog'
import MainPlates from './components/MainPlates/MainPlates'
import Error404 from "./components/Errors/Error404/error404";
import CoursePreview from "./components/CoursePreview/CoursePreview";
import CourseEditor from "./components/Editor/Editor";

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
				<Route path={'/main'} component={MainPlates} />
				<Route path={'/'} exact component={MainPlates} />
				<Route path={'/login'} component={Login} />
				<Route path={'/registration'} component={Registration} />

				<Route path={'/professions'} component={CoursesContainer} />
				<Route path={'/blog'} component={Blog} />
				<Route path={'/editor'} component={CourseEditor} />


				<Route path={'/account/:id/'} component={MyProfile} />
				<Route path={'/myprof/:id/'} component={MyProf} />
				<Route path={'/settings/:id/'} component={MySettings} />


				<Route path={'/lesson/'} component={LessonPage} />
				<Route path={'/course/:id/'} component={CoursePreview}/>


				<Route path={'/error'} component={Error404} />
				{/*<Route path={'/coursePreview'} component={CoursePreview} />*/}

				<Redirect to={'/error'} />
			</Switch>
		</div>
	)
}

export default App
