import LoginState from "../Store/LoginState"

function LoginReducer(state=LoginState,action){
    let temp={...state}
    if(action.type==='errorLogin'){
        temp.error=action.error
        temp.loading=false
    }
    if(action.type==='startLogin'){
        temp.loading=true
    }
    if(action.type==='endLogin'){
        temp.loading=false
        temp.isActive=true
    }
    return temp
}
export default LoginReducer