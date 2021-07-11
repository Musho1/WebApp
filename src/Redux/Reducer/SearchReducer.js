import SearchUserState from "../Store/SearchUserState"

function SearchReducer(state=SearchUserState,action){
    let temp={...state}
    if(action.type==='endSearchuser'){
        temp.searchuser=action.value
    }
    return temp
}
export default SearchReducer