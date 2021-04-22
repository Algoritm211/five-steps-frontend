import React, { useState } from 'react'
import Header from '../Header/Header'
import CoursesContainer from '../CoursesContainer/CoursesContainer'
import styles from './MainPage.module.css'
import MainPlates from '../MainPlates/MainPlates'
import CourseEditor from '../Editor/Editor'
import MyProf from "../MyProfession/MyProf";
import MySettings from "../MySettings/MySettings";


const MainLayout = ({ children }) => {

	return (
		<React.Fragment>
			<div className={styles.header}>
				<Header />
			</div>
			<main className={styles.main}>
				{children}
				{/*<MainPlates />*/}
				{/*<CoursesContainer />*/}
				{/*<CourseEditor />*/}
			</main>
		</React.Fragment>
	)

}

export default MainLayout
