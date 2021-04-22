import { instanceAxios } from './api-config'


export const lessonAPI = {
	getLesson: (courseId, lessonNumber) => {
		return instanceAxios.get(`lesson?courseId=${courseId}&lessonNumber=${lessonNumber}`)
			.then(data => data.data)
	},
}
