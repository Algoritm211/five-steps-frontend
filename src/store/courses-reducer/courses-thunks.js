import { coursesAPI } from '../../api/courses-api'
import {
	setAllCourses,
	setCurrentCourse,
	setUserAuthorCourses,
	setUserCourses,
	toggleIsLoading,
	updateCourse,
} from './courses-reducer'
import { setUserData } from '../auth-reducer/auth-reducer'


export const getAllCourses = (page, filters) => async (dispatch) => {
	dispatch(toggleIsLoading(true))
	const data = await coursesAPI.getAllCourses(page, filters)
	dispatch(setAllCourses(data))
	dispatch(toggleIsLoading(false))
	dispatch(setCurrentCourse(null))
}

export const getUserCourses = () => async (dispatch) => {
	dispatch(toggleIsLoading(true))
	const data = await coursesAPI.getUserCourses()
	dispatch(setUserCourses(data))
	dispatch(toggleIsLoading(false))
}

export const getUserAuthorCourses = () => async (dispatch) => {
	dispatch(toggleIsLoading(true))
	const data = await coursesAPI.getUserAuthorCourses()
	dispatch(setUserAuthorCourses(data))
	dispatch(toggleIsLoading(false))
}

export const loadCurrentCourse = (courseId) => async (dispatch) => {
	const data = await coursesAPI.getCourse(courseId)
	dispatch(setCurrentCourse(data.course))
}

export const subscribeToCourse = (courseId) => async (dispatch) => {
	const data = await coursesAPI.subscribeToCourse(courseId)
	dispatch(setUserData(data.user))
	dispatch(setCurrentCourse(data.course))
}

export const unsubscribeCourse = (courseId) => async (dispatch) => {
	const data = await coursesAPI.unsubscribeCourse(courseId)
	dispatch(setUserData(data.user))
	dispatch(setCurrentCourse(data.course))
}

export const toggleLikeCourse = (courseId) => async (dispatch) => {
	const data = await coursesAPI.toggleLikeCourse(courseId)
	dispatch(setUserData(data.user))
	dispatch(updateCourse(data.course))
}
