import { auth } from '../../config/firebase'
import {
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstant'

export const userRegister = (user, info) => {
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

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const result = auth.signInWithEmailAndPassword(email, password)
    const { user } = result
    const idRokenResult = await user.getIdTokenResult()

    dispatch({
      type: USER_LOGIN_SUCCESS,
      userInfo: {
        email: user.email,
        info: idRokenResult,
      },
    })

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
