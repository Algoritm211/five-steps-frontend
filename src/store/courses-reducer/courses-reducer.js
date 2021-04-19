import { createSlice } from '@reduxjs/toolkit'


const coursesReducer = createSlice({
	name: 'coursesReducer',
	initialState: {
		allCourses: [],
		isLoading: false,
		usersCourses: []
	},
	reducers: {
		toggleIsLoading: (state, action) => {
			state.isLoading = action
		},
		setAllCourses: (state, action) => {
			state.allCourses = action.payload.courses
		},
		setUserCourses: (state, action) => {
			state.usersCourses = action.payload.courses
		}
	}
})

export const {setAllCourses, toggleIsLoading, setUserCourses} = coursesReducer.actions

export default coursesReducer.reducer
