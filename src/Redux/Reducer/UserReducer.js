import UserState from "../Store/UserState"

function UserReducer(state=UserState,action){
    let temp={...state}
    if(action.type==='startGetuserByUdi'){
        temp.loading=true
    }
    if(action.type==='endGetUserByUid'){
        temp.loading=false
        temp.user=action.user
    }
    return temp    
}
export default UserReducer