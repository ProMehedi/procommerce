import { USER_LOGIN, USER_LOGOUT } from '../constants/userConstant'

export const userLogin = (user, info) => {
  return {
    type: USER_LOGIN,
    payload: {
      email: user.email,
      info,
    },
  }
}

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
    payload: {},
  }
}
