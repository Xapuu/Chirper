import { combineReducers } from 'redux'
import subscribedTo from './subscribedTo'
import auth from './auth'
import calls from './calls'
import myChirps from './myChirps'


export default combineReducers({ subscribedTo, auth, calls, myChirps })
