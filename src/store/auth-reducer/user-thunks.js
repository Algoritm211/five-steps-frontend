import { userAPI } from '../../api/user-api'
import { setUserData } from './auth-reducer'

export const uploadAvatar = (photoFile) => async (dispatch) => {
	const data = await userAPI.uploadAvatar(photoFile)
	dispatch(setUserData(data.user))
}

export const deleteAvatar = () => async (dispatch) => {
	const data = await userAPI.deleteAvatar()
	dispatch(setUserData(data.user))
}
