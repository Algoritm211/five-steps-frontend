import React, { useEffect, useState } from 'react'
import './MyProf.css'
import Header from '../Header/Header'
import styles from '../MainLayout/MainPage.module.css'
import CourseCard from '../CourseCard/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthorCourses, getUserCourses } from '../../store/courses-reducer/courses-thunks'
import {
	getUserAuthorCourses as getAuthorCourses,
	getUserCourses as userCoursesSelector,
} from '../../store/courses-reducer/courses-selector'
import MainLayout from '../MainLayout/MainLayout'
import ProfileNavbar from '../MyProfile/ProfileNavbar/ProfileNavbar'
import { getIsAuth, getIsLoading, getUserData } from '../../store/auth-reducer/auth-selector'
import Error403 from '../Errors/Error403/Error403'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import CourseModal from './CourseModal/CourseModal'

const MyProf = () => {
	const user = useSelector(getUserData)
	const dispatch = useDispatch()
	const courses = useSelector(userCoursesSelector)
	const authorCourses = useSelector(getAuthorCourses)
	const isAuth = useSelector(getIsAuth)
	const isLoading = useSelector(getIsLoading)
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		dispatch(getUserCourses())
		dispatch(getUserAuthorCourses())
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

	const userAuthorCoursesBlock = authorCourses.map((authorCourse) => {
		return <CourseCard course={authorCourse} key={authorCourse._id} />
	})

	return (
		<MainLayout>
			<div className='container mt-5'>
				<div className='row flex-lg-nowrap'>
					<div className='col-12 col-lg-auto acc-sidebar'>
						<ProfileNavbar />
					</div>
					<div style={{ flexShrink: '1' }}>
						<div className='col mb-3'>
							<div className='row'>
								<div className='d-flex'>
									<h1 className='acc-title'>Мої професії</h1>
								</div>
							</div>
							<div className='row pt-3'>
								<div className='acc-info d-flex mb-5 mt-0'>
									<div className={'courseContainer'}>
										{userCoursesBlock}
										{/*Если нет профессий, появляюется карточка ниже*/}
										{/*Кстати, когда нажимаешь на кнопку, то нужно, чтобы страница загружалась сверху*/}
										<Link to='/professions'>
											<div className='container add-course'>
												<div className='d-flex justify-content-center add-course-ill'>
													<i className='fas fa-plus-circle' />
												</div>
												<div className='d-flex justify-content-center add-course-text'>
													<p>Обрати професію</p>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
						{user.role === 'expert' && (
							<div className='col mb-5'>
								<div className='row'>
									<div className='d-flex'>
										<h1 className='acc-title' style={{ width: '100%' }}>Створені мною професії</h1>
									</div>
								</div>
								<div className='row pt-3' >
									<div className='acc-info d-flex mt-0' >
										<div className={'courseContainer'} style={{width: "100%"}}>
											{userAuthorCoursesBlock}
											<Link to='#'>
												<div className='container add-course' onClick={() => setIsModalOpen(true)}>
													<div className='d-flex justify-content-center add-course-ill'>
														<i className='fas fa-plus-circle' />
													</div>
													<div className='d-flex justify-content-center add-course-text'>
														<p>Створити курс</p>
													</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}

					</div>
				</div>


			</div>

			<CourseModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

		</MainLayout>
	)
}

export default MyProf
