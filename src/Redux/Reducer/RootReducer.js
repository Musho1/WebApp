import { combineReducers } from 'redux'
import CaruselReducer from './CarusleReducer'
import UserAccauntReducer from './UserAccauntReducer'
import LoginReducer from './LoginReducer'
import SearchReducer from './SearchReducer'
import SelectImgReducer from './SelectImgReducer'
import SignUpReducer from './SignUpReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    singup:SignUpReducer,
    login:LoginReducer,
    user:UserReducer,
    photo:SelectImgReducer,
    carusel:CaruselReducer,
    search:SearchReducer,
    useraccaunt:UserAccauntReducer,
})