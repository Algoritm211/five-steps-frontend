import { instanceAxios } from './api-config'


export const lessonAPI = {
	createLesson: (lessonData) => {
		return instanceAxios.post('lesson/create', lessonData)
			.then(data => data.data)
	},

	getLesson: (courseId, lessonNumber) => {
		return instanceAxios.get(`lesson?courseId=${courseId}&lessonNumber=${lessonNumber}`)
			.then(data => data.data)
	},
}
