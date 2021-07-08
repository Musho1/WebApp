import CaruselState from "../Store/CaruselState"

function CaruselReducer(state=CaruselState,action){
    let temp={...state}
    if(action.type==='OpenCaruselPhotos'){
        temp.openCarusle=true
        temp.Activeindex=action.index
    }
    if(action.type==='CloseCaruslePhotos'){
        
        temp.openCarusle=false
    }
    return temp
}
export default CaruselReducer