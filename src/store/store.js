import {combineReducers, configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  // authReducer: authReducer,
})

const store = configureStore({
  reducer: rootReducer,
})


window.__store__ = store

export default store
