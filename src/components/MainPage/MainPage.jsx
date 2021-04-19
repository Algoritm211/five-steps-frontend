import React, { useState } from 'react'
import Header from '../Header/Header'
import CoursesContainer from '../CoursesContainer/CoursesContainer'
import styles from './MainPage.module.css'
import MainPlates from '../MainPlates/MainPlates'
import CourseEditor from '../Editor/Editor'


const MainPage = () => {

	return (
		<React.Fragment>
				<div className={styles.header}>
					<Header />
				</div>
				<main className={styles.main}>
					<MainPlates />
					{/*<CoursesContainer />*/}
					{/*<CourseEditor />*/}
				</main>
		</React.Fragment>
	)
}

export default MainPage
