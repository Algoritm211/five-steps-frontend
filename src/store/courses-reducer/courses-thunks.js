import { coursesAPI } from '../../api/courses-api'
import { setAllCourses, setUserCourses, toggleIsLoading } from './courses-reducer'


export const getAllCourses = (page, filters) => async (dispatch) => {
	dispatch(toggleIsLoading(true))
	const data = await coursesAPI.getAllCourses(page, filters)
	dispatch(setAllCourses(data))
	dispatch(toggleIsLoading(false))
}

export const getUserCourses = () => async (dispatch) => {
	dispatch(toggleIsLoading(true))
	const data = await coursesAPI.getUserCourses()
	console.log(data)
	dispatch(setUserCourses(data))
	dispatch(toggleIsLoading(false))
}
