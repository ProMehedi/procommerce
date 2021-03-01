import { auth } from 'firebase'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/actions/userActions'

const dispatch = useDispatch()

useEffect(() => {
  const unSubsCribe = auth.onAuhStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult()

      dispatch(userActions(user))
      console.log(user)
    }
  })
}, [])
