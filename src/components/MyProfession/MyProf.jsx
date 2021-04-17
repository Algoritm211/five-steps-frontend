import React from 'react'
import './MyProf.css'
import Header from '../Header/Header'
import styles from "../MainPage/MainPage.module.css";
import CourseCard from '../CourseCard/CourseCard'

const MyProf = () => {
	const course = {
		_id: 'dasdasdassdaasd',
		category: 'IT',
		title: 'Тестувальник програмного забезпечення',
		likesCount: '135',
		authorAvatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
		position: 'Senior Developer in 5steps Corp.',
		authorName: 'Alexey Horbunov FI-91',
	}

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
					<CourseCard course={course} />
					<CourseCard course={course} />
					<CourseCard course={course} />
				</div>
			</div>
		</React.Fragment>
	)
}

export default MyProf
