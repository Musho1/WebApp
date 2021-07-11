import UserAccauntState from "../Store/UserAccauntState"

function UserAccauntReducer(state=UserAccauntState,action){
    let temp={...state}

    if(action.type==='UserAccauntData'){
        temp.useraccauntdata=action.data
        console.log('ss')
    }
    return temp
}
export default UserAccauntReducer