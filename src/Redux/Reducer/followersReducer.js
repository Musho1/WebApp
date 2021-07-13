import followersState from "../Store/followersState"

function followersReducer(state=followersState,action){
    let temp={...state}
    if(action.type==='followersReducer'){
        temp.openfollowers=true
        temp.title=action.title
    }
    if(action.type==='closefollowerscomponent'){
        temp.openfollowers=false
    }
    return temp
}
export default followersReducer