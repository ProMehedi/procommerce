import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import Header from './components/nav/Header'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import RegisterComplete from './pages/auth/RegisterComplete'
import Home from './pages/Home'
import { auth } from './config/firebase'
import { useEffect } from 'react'
import { userActions } from './store/actions/userActions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userInfo = await user.getIdTokenResult()

        dispatch(userActions(user, userInfo))
      }
    })

    return () => unSubscribe()
  }, [dispatch])
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/register/complete' component={RegisterComplete} />
      </Switch>
    </>
  )
}

export default App
