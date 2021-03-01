import { LOGGED_IN_USER } from '../constants/userConstant'

export const userActions = (user, info) => {
  return {
    type: LOGGED_IN_USER,
    payload: {
      email: user.email,
      info,
    },
  }
}
