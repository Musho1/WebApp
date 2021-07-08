import PhotoState from "../Store/PhotoState"

function SelectImgReducer(state=PhotoState,action){
    let temp={...state}
    if(action.type==="closeSelectImg"){
        temp.selectImg=false
    }
    if(action.type==='OpenSelectImg'){
        temp.selectImg=true
    }
    if(action.type==='ClosePopUpSuccessSaveimg'){
        temp.openPopUpImg=false
    }
    if(action.type==='OpenPopUpSuccessSaveimg'){
        temp.Newphotos.push(action.value)
        temp.openPopUpImg=true
        temp.loading=false
    }
    if(action.type==='SeveImgLoadingStart'){
        temp.loading=true
    }
    return temp
}
export default SelectImgReducer