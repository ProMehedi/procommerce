// Creating Store
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducers } from './reducers/userReducers'

const rootRecuder = combineReducers({
  user: userReducers,
})

export const store = createStore(rootRecuder, composeWithDevTools())
