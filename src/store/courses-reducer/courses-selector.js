

export const getAllCourses = (state) => {
	return state.coursesReducer.allCourses
}

export const getIsLoading = (state) => {
	return state.coursesReducer.isLoading
}

export const getUserCourses = (state) => {
	return state.coursesReducer.usersCourses
}
