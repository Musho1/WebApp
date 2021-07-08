import { combineReducers } from 'redux'
import CaruselReducer from './CarusleReducer'
import LoginReducer from './LoginReducer'
import SelectImgReducer from './SelectImgReducer'
import SignUpReducer from './SignUpReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    singup:SignUpReducer,
    login:LoginReducer,
    user:UserReducer,
    photo:SelectImgReducer,
    carusel:CaruselReducer
})