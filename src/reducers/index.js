import { combineReducers } from 'redux'
import initialState from './initialState'

import auth from './auth'
import user from './user'

export default combineReducers({
	auth,
	user,
})

export { initialState }
