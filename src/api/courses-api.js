import { instanceAxios } from './api-config'


export const coursesAPI = {
	getAllCourses: () => {
		return instanceAxios.get('course')
			.then((data) => data.data)
	},

	getUserCourses: () => {
		return instanceAxios.get('course/user')
			.then((data) => data.data)
	}
}
