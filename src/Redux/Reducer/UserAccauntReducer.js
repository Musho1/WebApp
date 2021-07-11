import UserAccauntState from "../Store/UserAccauntState"

function UserAccauntReducer(state=UserAccauntState,action){
    let temp={...state}
    if(action.type==='UserAccauntData'){
        temp.useraccauntdata=action.data
        temp.loadingUserAccaunt=false
    }
    if(action.type==='StartGetUserAcccauntByUid'){
        temp.loadingUserAccaunt=true
    }
    return temp
}
export default UserAccauntReducer