import LoginState from "../Store/LoginState"

function LoginReducer(state=LoginState,action){
    console.log(action)
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
        window.location.href="/profile"


    }
    return temp
}
export default LoginReducer