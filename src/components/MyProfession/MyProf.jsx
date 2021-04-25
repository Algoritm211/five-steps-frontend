import React, { useEffect } from 'react'
import './MyProf.css'
import Header from '../Header/Header'
import styles from '../MainLayout/MainPage.module.css'
import CourseCard from '../CourseCard/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCourses } from '../../store/courses-reducer/courses-thunks'
import { getUserCourses as userCoursesSelector } from '../../store/courses-reducer/courses-selector'
import MainLayout from '../MainLayout/MainLayout'
import ProfileNavbar from '../MyProfile/ProfileNavbar/ProfileNavbar'
import { getIsAuth, getIsLoading } from '../../store/auth-reducer/auth-selector'
import Error403 from '../Errors/Error403/Error403'
import Loader from '../Loader/Loader'

const MyProf = () => {

	const dispatch = useDispatch()
	const courses = useSelector(userCoursesSelector)
	const isAuth = useSelector(getIsAuth)
	const isLoading = useSelector(getIsLoading)

	useEffect(() => {
		dispatch(getUserCourses())
	}, [])

	if (isLoading) {
		return <Loader />
	}

	if (!isAuth) {
		return <Error403 />
	}

	const userCoursesBlock = courses.map((course) => {
		return <CourseCard course={course} key={course._id} />
	})

	return (
		<MainLayout>
			<div className='container mt-5'>
				<div className='row flex-lg-nowrap'>
					<div className='col-12 col-lg-auto acc-sidebar'>
						<ProfileNavbar />
					</div>

					<div className='col mb-3'>
						<div className='row'>
							<div className='d-flex'>
								<h1 className='acc-title'>Мої професії</h1>
							</div>
						</div>
						<div className='row pt-3'>
							<div className='acc-info d-flex' style={{marginTop: '0'}}>

								<div className={'courseContainer'}>
									{userCoursesBlock}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*<div className={'container d-flex myProfTitle'}>*/}
			{/*	<h1>Мої професії</h1>*/}
			{/*</div>*/}
			{/*<div className={'container d-flex coursePage'}>*/}
			{/*	<div className={'courseContainer'}>*/}
			{/*		{userCoursesBlock}*/}
			{/*	</div>*/}
			{/*</div>*/}
		</MainLayout>
	)
}

export default MyProf
