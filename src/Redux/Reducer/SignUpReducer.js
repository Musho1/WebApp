import SignUpState from "../Store/SignUpState"

function  SignUpReducer(state=SignUpState,action){
    let temp={...state}
    if(action.type==="startSingUpUser"){
        temp.loading=true
    }
    if(action.type==="endSingUpUser"){
        temp.loading=false
    }
    return temp
}
export default SignUpReducer