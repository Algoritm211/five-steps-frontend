export const getCurrentLesson = (state) => {
	return state.lessonReducer.currentLesson
}

export const getLessonPage = (state) => {
	return state.lessonReducer.lessonPage
}

export const getCurrentCourse = (state) => {
	return state.lessonReducer.currentCourse
}

export const getLessonError = (state) => {
	return state.lessonReducer.error
}
