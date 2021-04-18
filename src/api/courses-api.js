import { instanceAxios } from './api-config'


export const coursesAPI = {
	getAllCourses: () => {
		return instanceAxios.get('course')
			.then((data) => data.data)
	}
}
