import { instanceAxios } from './api-config'


export const coursesAPI = {
	getAllCourses: (page, filters) => {
		return instanceAxios.get(`course?page=${page}&filters=${filters.join(',')}`)
			.then((data) => data.data)
	},

	getUserCourses: () => {
		return instanceAxios.get('course/user')
			.then((data) => data.data)
	}
}
