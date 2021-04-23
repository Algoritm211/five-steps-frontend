import { createSlice } from '@reduxjs/toolkit'


const coursesReducer = createSlice({
	name: 'coursesReducer',
	initialState: {
		allCourses: [],
		isLoading: false,
		usersCourses: [],
		page: 1,
		coursesCount: 0,
		filters: [],
		currentCourse: null
	},
	reducers: {
		toggleIsLoading: (state, action) => {
			state.isLoading = action
		},
		setAllCourses: (state, action) => {
			state.allCourses = action.payload.courses
			state.coursesCount = action.payload.coursesCount
		},
		setUserCourses: (state, action) => {
			state.usersCourses = action.payload.courses
		},
		setFilters: (state, action) => {
			state.filters = [...action.payload]
		},
		setCurrentCourse: (state, action) => {
			state.currentCourse = action.payload
		}
	},

})

export const {
	setAllCourses,
	toggleIsLoading,
	setUserCourses,
	setFilters } = coursesReducer.actions

export default coursesReducer.reducer
