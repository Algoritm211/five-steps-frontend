import { instanceAxios } from './api-config'


export const coursesAPI = {
	getAllCourses: (page, filters) => {
		return instanceAxios.get(`course?page=${page}&filters=${filters.join(',')}`)
			.then((data) => data.data)
	},

	getUserCourses: () => {
		return instanceAxios.get('course/user')
			.then((data) => data.data)
	},

	getCourse: (courseId) => {
		return instanceAxios.get(`course/one?courseId=${courseId}`)
			.then(data => data.data)
	},

	subscribeToCourse: (courseId) => {
		return instanceAxios.get(`course/subscribe?courseId=${courseId}`)
			.then(data => data.data)
	},

	unsubscribeCourse: (courseId) => {
		return instanceAxios.delete(`course/subscribe?courseId=${courseId}`)
			.then(data => data.data)
	}
}
