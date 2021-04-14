import React from 'react'
import Header from '../Header/Header'
import CoursesContainer from '../CoursesContainer/CoursesContainer'
import styles from './MainPage.module.css'

const MainPage = () => {
	return (
		<React.Fragment>
			<div className={styles.header}>
				<Header />
			</div>
			<main className={styles.main}>
				<CoursesContainer />
			</main>
		</React.Fragment>
	)
}

export default MainPage
