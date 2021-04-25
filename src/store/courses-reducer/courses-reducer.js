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
		currentCourse: null,
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
		},
		updateCourse: (state, action) => {
			state.allCourses = state.allCourses.map(course => {
				if (course._id === action.payload._id) {
					return action.payload
				}
				return course
			})
		}
	},

})

export const {
	setAllCourses,
	toggleIsLoading,
	setUserCourses,
	setCurrentCourse,
	updateCourse,
	setFilters } = coursesReducer.actions

export default coursesReducer.reducer
