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
    if(action.type==='successchangeavatar'){
        temp.SuccessChangeAvatar=action.value
        temp.imgpogup=true
    }
    if(action.type==='ClosePopUp'){
        temp.imgpogup=false
    }
    if(action.type==='addphoto'){
        let d=Date.now()
        temp.user.photos={...temp.user.photos,d:action.value}
    }
    if(action.type==='endSaveNewSettings'){
        temp.user=action.user
        temp.settingLoadin=false
        temp.settingPopUp=true 
    }
    if(action.type==='startSaveNewSettings'){
        temp.settingLoadin=true
    }
    if(action.type==='SaveNewSettings'){
        temp.settingPopUp=false
    }
    if(action.type==='endgetmyfollowing'){
        if(temp.following.length!==0)
        {
            let k=true
            temp.following.forEach((elm)=>{
                if(elm.uid===action.value.uid){
                    k=false
                }
            })
            if(k){
                temp.following.push(action.value)
                if(action.value.photos!==undefined){
                    Object.values(action.value.photos).forEach((elm)=>{
                        if(temp.followingpost[0]!==undefined){
                            temp.followingpost[0].push(elm)
                        }
                        else{
                            temp.following.push(action.value)
                        }
                    })
                    
                }
            }
        }
        else{
            temp.following.push(action.value)
            if(action.value.photos)
            temp.followingpost.push(Object.values(action.value.photos))
        }
        
       
    }

    return temp    
}
export default UserReducer