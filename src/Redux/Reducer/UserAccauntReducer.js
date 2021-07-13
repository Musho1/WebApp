import UserAccauntState from "../Store/UserAccauntState"

function UserAccauntReducer(state=UserAccauntState,action){
    let temp={...state}
    if(action.type==='UserAccauntData'){
        temp.useraccauntdata=action.data
        temp.loadingUserAccaunt=false
        temp.friend=action.friend
    }
    if(action.type==="removeuserbyid"){
        temp.friend=false
    }
    if(action.type==='StartGetUserAcccauntByUid'){
        temp.loadingUserAccaunt=true
    }
    if(action.type==='isfollowing'){
        temp.friend=true
    }
    return temp
}
export default UserAccauntReducer