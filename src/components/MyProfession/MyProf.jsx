import React, { useEffect } from 'react'
import './MyProf.css'
import Header from '../Header/Header'
import styles from "../MainLayout/MainPage.module.css";
import CourseCard from '../CourseCard/CourseCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCourses } from '../../store/courses-reducer/courses-thunks'
import { getUserCourses as userCoursesSelector } from '../../store/courses-reducer/courses-selector'
import MainLayout from '../MainLayout/MainLayout'
import ProfileNavbar from '../MyProfile/ProfileNavbar/ProfileNavbar'

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
		<MainLayout>
			<div className="container mt-5">
				<div className="row flex-lg-nowrap">
					<div className="col-12 col-lg-auto" style={{width: '200px'}}>
						<div className="cardAcc">
							<div className="e-navlist">
								<ProfileNavbar />
							</div>
						</div>
					</div>

					<div className="col">

						<div className="row1">
							<div className="col mb-3">
								<div className="cardAcc">
									<div className="cardAcc-body">
										<div className="e-profile">
											<div className="row">
												<div className="d-flex">
													<h1 className="acc-title">Мої професії</h1>
												</div>
											</div>
											<div className="row pt-3">
												<div className="acc-info d-flex">

													<div className={'courseContainer'}>
																{userCoursesBlock}
														</div>

												</div>


											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
			{/*<div className={'container d-flex myProfTitle'}>*/}
			{/*	<h1>Мої професії</h1>*/}
			{/*</div>*/}
			{/*<div className={'container d-flex coursePage'}>*/}
			{/*	<div className={'courseContainer'}>*/}
			{/*		{userCoursesBlock}*/}
			{/*	</div>*/}
			{/*</div>*/}
		</MainLayout>
	)
}

export default MyProf
