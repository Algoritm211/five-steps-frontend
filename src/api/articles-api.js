import { instanceAxios } from './api-config'


export const articlesAPI = {
	getArticles: (page) => {
		return instanceAxios.get(`/article?page=${page}`)
			.then(data => data.data)
	}
}
