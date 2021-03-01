import { USER_LOGIN, USER_LOGOUT } from '../constants/userConstant'

export const userReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload
    case USER_LOGOUT:
      return action.payload
    default:
      return state
  }
}
