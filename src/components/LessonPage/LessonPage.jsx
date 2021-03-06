
import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './LessonPage.css'
import styles from '../MainLayout/MainPage.module.css'
import ReactPaginate from 'react-paginate'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	getCurrentLesson,
	getLessonError,
	getLessonPage,
} from '../../store/lesson-reducer/lesson-selector'
import { setLessonPage } from '../../store/lesson-reducer/lesson-reducer'
import { loadLesson } from '../../store/lesson-reducer/lesson-thunks'
import Error404 from '../Errors/Error404/error404'
import { getCurrentCourse } from '../../store/courses-reducer/courses-selector'
import Loader from '../Loader/Loader'


const LessonPage = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const lesson = useSelector(getCurrentLesson)
	const lessonNumber = useSelector(getLessonPage)
	const currentCourse = useSelector(getCurrentCourse)
	const error = useSelector(getLessonError)

	const [query, setQuery] = useQueryParams({courseId: StringParam, lessonNumber: NumberParam})

	useEffect(() => {
		const courseId = query.courseId
		const lessonNumber = query.lessonNumber
		if (!courseId || !lessonNumber) {
			history.push('/error')
			return
		}
		dispatch(setLessonPage(lessonNumber))
		dispatch(loadLesson(courseId, lessonNumber))
	}, [])

	if (error) {
		return <Error404 />
	}
	if (!lesson || !currentCourse) {
		return <Loader />
	}

	const onPageChange = (pageInfo) => {
		dispatch(loadLesson(currentCourse._id, pageInfo.selected + 1))
		setQuery({courseId: currentCourse._id, lessonNumber: pageInfo.selected + 1})
	}

	return (
		<React.Fragment>
			<div className='course-steps-pagination'>
				<ReactPaginate
					forcePage={lessonNumber - 1}
					onPageChange={onPageChange}
					pageCount={currentCourse.lessons.length}
					// pageCount={5}
					pageClassName={'course-pagination-page'}
					pageLinkClassName={'course-pagination-link'}
					containerClassName={'course-pagination-container'}
					previousClassName={'course-pagination-disable'}
					nextClassName={'course-pagination-disable'}
					disabledClassName={'course-pagination-disable'}
					activeClassName={'course-pagination-active'} />
			</div>
			<div className={styles.header}>
				<Header />
			</div>
			<div className='container course-page mt-5'>
				<div className='col-12 col-sm-12 col-md-8 course-content'>
					<h1>{lesson.title}</h1>
					<p className='courses-lecture mb-5' dangerouslySetInnerHTML={{ __html: lesson.body }}>
						{/*{lesson.body}*/}
					</p>
					<div className='d-flex row'>
						<div className='d-flex justify-content-start mb-5'>
							<button className='guid-button'>
								???????????????? ????????????????
							</button>
						</div>
					</div>
				</div>
				<div className='col-12 col-sm-12 col-md-3 me-auto ms-auto course-info'>
					<h3 className='courses-subtitle'>???????? ?????????? {lessonNumber}</h3>
					<h1 className='courses-title mb-5'>{currentCourse.title}</h1>
					<p className='course-description mb-5'>{currentCourse?.author?.name} - ?????????? ??????????, ???? ?????? ??????????????, ???????????? ???????????????? ?????????? ??????????????????</p>
					{/*<audio*/}
					{/*    controls*/}
					{/*    className="course-audio"*/}
					{/*    src="../../assets/audio/test-step.mp3">*/}
					{/*    Your browser does not support the*/}
					{/*    <code>audio</code> element.*/}
					{/*</audio>*/}
					<iframe className='mb-3' style={{ width: '100%', height: '166px', scrolling: 'no', frameBorder: 'no' }}
									src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/639103986&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true' />
				</div>
			</div>
		</React.Fragment>
	)
}

export default LessonPage
