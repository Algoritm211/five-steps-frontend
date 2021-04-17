import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import './CoursesContainer.css'

const CoursesContainer = () => {


	const course = {
		category: 'IT',
		title: 'Тестувальник програмного забезпечення',
		likesCount: '135',
		authorAvatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
		position: 'Экс-Эдуард-президент в компании PashelNahui Corp.',
		authorName: 'Наталья Горбенко',
	}

	return (
		<div className={'d-flex justify-content-center coursePage'}>
			<div className={'courseContainer'}>
				<CourseCard course={course} />
				<CourseCard course={course} />
				<CourseCard course={course} />
				<CourseCard course={course} />
				<CourseCard course={course} />
				<CourseCard course={course} />
				<CourseCard course={course} />
			</div>
		</div>
	)
}

export default CoursesContainer
