import { createSlice } from '@reduxjs/toolkit'


const coursesReducer = createSlice({
	name: 'coursesReducer',
	initialState: {
		allCourses: [],
		isLoading: false
	},
	reducers: {
		toggleIsLoading: (state, action) => {
			state.isLoading = action
		},
		setAllCourses: (state, action) => {
			console.log(action.payload.courses)
			state.allCourses = action.payload.courses
		}
	}
})

export const {setAllCourses, toggleIsLoading} = coursesReducer.actions

export default coursesReducer.reducer
