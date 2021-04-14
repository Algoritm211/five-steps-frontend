import React from 'react'
import Header from '../Header/Header'
import CoursesContainer from '../CoursesContainer/CoursesContainer'

const MainPage = () => {
	return (
		<React.Fragment>
			<div>
				<Header />
			</div>
			<div>
				<CoursesContainer />
			</div>
		</React.Fragment>
	)
}

export default MainPage
