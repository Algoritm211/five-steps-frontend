import React, { useEffect } from 'react'
import CourseCard from '../CourseCard/CourseCard'
import './CoursesContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../store/courses-reducer/courses-thunks'
import { getIsLoading } from '../../store/courses-reducer/courses-selector'
import { getAllCourses as getAllCoursesSelector } from '../../store/courses-reducer/courses-selector'

const CoursesContainer = () => {
	const dispatch = useDispatch()
	const allCourses = useSelector(getAllCoursesSelector)
	const isLoading = useSelector(getIsLoading)

	console.log(allCourses)

	useEffect(() => {
		dispatch(getAllCourses())
	}, [])

	// const course = {
	// 	category: 'IT',
	// 	title: 'Тестувальник програмного забезпечення',
	// 	likesCount: '135',
	// 	authorAvatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
	// 	position: 'Экс-Эдуард-президент в компании PashelNahui Corp.',
	// 	authorName: 'Наталья Горбенко',
	// }

	const allCoursesBlock = allCourses.map((course, index) => {
		return <CourseCard course={course} key={index}/>
	})

	return (
		<div className={'container d-flex coursePage'}>
			<div className={'courseContainer'}>
				{/*<CourseCard course={course} />*/}
				{/*<CourseCard course={course} />*/}
				{/*<CourseCard course={course} />*/}
				{/*<CourseCard course={course} />*/}
				{/*<CourseCard course={course} />*/}
				{/*<CourseCard course={course} />*/}
				{/*<CourseCard course={course} />*/}
				{allCoursesBlock}
			</div>
		</div>
	)
}

export default CoursesContainer
