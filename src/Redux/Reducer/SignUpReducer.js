import SignUpState from "../Store/SignUpState"

function  SignUpReducer(state=SignUpState,action){
    let temp={...state}
    if(action.type==="startSingUpUser"){
        temp.loading=true
    }
    if(action.type==="endSingUpUser"){
        temp.loading=false
    }
    if(action.type==='ErrorSingUp'){
        temp.loading=false
        temp.errorSigup=action.error.message
    }
    if(action.type==='closeSingUpPopup'){
        temp.errorSigup=''
    }
    return temp
}
export default SignUpReducer