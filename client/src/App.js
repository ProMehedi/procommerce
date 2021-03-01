import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import Header from './components/nav/Header'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import RegisterComplete from './pages/auth/RegisterComplete'
import Home from './pages/Home'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/register/complete' component={RegisterComplete} />
      </Switch>
    </Provider>
  )
}

export default App
