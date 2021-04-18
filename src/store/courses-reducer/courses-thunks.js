import { coursesAPI } from '../../api/courses-api'
import { setAllCourses, toggleIsLoading } from './courses-reducer'


export const getAllCourses = () => async (dispatch) => {
	dispatch(toggleIsLoading(true))
	const data = await coursesAPI.getAllCourses()
	dispatch(setAllCourses(data))
	dispatch(toggleIsLoading(false))
}
