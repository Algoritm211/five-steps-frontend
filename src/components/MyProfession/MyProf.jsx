import React, { useEffect } from 'react'
import './MyProf.css'
import Header from '../Header/Header'
import styles from "../MainPage/MainPage.module.css";
import CourseCard from '../CourseCard/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCourses } from '../../store/courses-reducer/courses-thunks'
import { getUserCourses as userCoursesSelector } from '../../store/courses-reducer/courses-selector'

const MyProf = () => {

	const dispatch = useDispatch()
	const courses = useSelector(userCoursesSelector)

	useEffect(() => {
		dispatch(getUserCourses())
	}, [])

	// const course = {
	// 	_id: 'dasdasdassdaasd',
	// 	category: 'IT',
	// 	title: 'Тестувальник програмного забезпечення',
	// 	rating: '135',
	// 	authorAvatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
	// 	position: 'Senior Developer in 5steps Corp.',
	// 	author: {
	// 		name: 'Alexey Horbunov FI-91',
	// 	}
	// }

	const userCoursesBlock = courses.map((course) => {
		return <CourseCard course={course} key={course._id}/>
	})

	return (
		<React.Fragment>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={'container d-flex myProfTitle'}>
				<h1>Мої професії</h1>
			</div>
			<div className={'container d-flex coursePage'}>
				<div className={'courseContainer'}>
					{userCoursesBlock}
				</div>
			</div>
		</React.Fragment>
	)
}

export default MyProf
