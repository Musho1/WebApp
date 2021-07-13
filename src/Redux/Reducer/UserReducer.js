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
    if(action.type==='successchangeavatarBackgraund'){
        temp.SucceschageBackgraund=action.value
        temp.backgraundPopUp=true
    }
    if(action.type==='closebackgraundpopup'){
        temp.backgraundPopUp=false
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
            let k=true
           
            temp.following.forEach((elm)=>{

                if(action.value && elm.uid===action.value.uid){
                    k=false
                }
            })
            if(k){
                temp.following.push(action.value)
                if(action.value!==null && action.value.photos!==undefined){
                    Object.values(action.value.photos).forEach((elm)=>{
                        if(temp.followingpost!==undefined){
                            temp.followingpost.push(elm)
                        }
                        
                    })
                    
                }
                if(action.value!==null && action.value.status!==undefined){
                    Object.values(action.value.status).forEach((elm)=>{
                        if(temp.followingpost!==undefined){
                            temp.followingpost.push(elm)
                        }
                        
                    })
                }
            }
        }
     if(action.type==='endgetmyfollowers'){
         let k=true
         temp.followers.forEach((elm)=>{
            if(elm.uid===action.value.uid){
                k=false
            }
        })
        if(k){
            temp.followers.push(action.value)
        }
     }



    if(action.type==='removeuserbyid'){
        temp.following.forEach((elm,i)=>{
            if(elm.uid===action.uid){
                temp.following.splice(i,1)
            }
        })
        // temp.followingpost.forEach((elm,i)=>{
        //     if(elm)
        // })
    }

    return temp    
}
export default UserReducer