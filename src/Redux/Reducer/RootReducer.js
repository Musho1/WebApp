import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import SignUpReducer from './SignUpReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    singup:SignUpReducer,
    login:LoginReducer,
    user:UserReducer
})