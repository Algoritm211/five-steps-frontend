import { setCurrentCourse, setCurrentLesson, setError, setLessonPage } from './lesson-reducer'
import { lessonAPI } from '../../api/lesson-api'

export const createLesson = (lessonData) => async (dispatch) => {
	const data = await lessonAPI.createLesson(lessonData)
}

export const loadLesson = (courseId, lessonNumber) => async (dispatch) => {
	try {
		dispatch(setError(null))
		const data = await lessonAPI.getLesson(courseId, lessonNumber)
		// console.log(data)
		if (data.message) {
			return
		}
		dispatch(setCurrentLesson(data.lesson))
		dispatch(setLessonPage(lessonNumber))
		dispatch(setCurrentCourse(data.course))
	} catch (error) {
		dispatch(setError('Error'))
	}

}
