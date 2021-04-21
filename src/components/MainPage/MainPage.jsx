import React, { useState } from 'react'
import Header from '../Header/Header'
import CoursesContainer from '../CoursesContainer/CoursesContainer'
import styles from './MainPage.module.css'
import MainPlates from '../MainPlates/MainPlates'
import CourseEditor from '../Editor/Editor'
import MyProfile from "../MyProfile/MyProfile";
import MySettings from "../MySettings/MySettings";
import MyProf from "../MyProfession/MyProf";


const MainPage = () => {

	return (
		<React.Fragment>
				<div className={styles.header}>
					<Header />
				</div>
				<main className={styles.main}>
					{/*<MyProfile />*/}
					<MySettings />
					{/*<MyProf />*/}
					{/*<CoursesContainer />*/}
					{/*<CourseEditor />*/}
					{/*<MainPlates />*/}
				</main>
		</React.Fragment>
	)
}

export default MainPage
