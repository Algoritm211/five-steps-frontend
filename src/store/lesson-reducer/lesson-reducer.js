import { createSlice } from '@reduxjs/toolkit'


const lessonReducer = createSlice({
	name: 'lessonReducer',
	initialState: {
		currentLesson: null,
		lessonPage: 1,
		error: null,
		currentCourse: null
	},
	reducers: {
		setCurrentLesson: (state, action) => {
			state.currentLesson = action.payload
		},
		setLessonPage: (state, action) => {
			state.lessonPage = action.payload
		},
		setError: (state, action) => {
			state.error = action.payload
		},
		setCurrentCourse: (state, action) => {
			state.currentCourse = action.payload
		}
	}
})

export const {setCurrentLesson, setLessonPage, setError, setCurrentCourse} = lessonReducer.actions
export default lessonReducer.reducer
