import { db } from "../../firebase"

export const UserAccauntData=(data)=>{  
    return {
        type:"UserAccauntData",
        data:data,
    }
}


export const GetUserAcccauntByUid=(uid)=>{
    return (dispatch)=>{
        dispatch(StartGetUserAcccauntByUid())
        db.ref().child("users").child(uid).get().then((r)=>{
        dispatch(UserAccauntData(r.val()))
        })
    }
}
const StartGetUserAcccauntByUid=()=>{
    return {
        type:'StartGetUserAcccauntByUid'
    }
}

export const following=(otheruid)=>{
    const myuid=sessionStorage.getItem('uid')
    return (dispatch)=>{

        db.ref(`/users/${myuid}/following`).push(otheruid).then((r)=>{
            console.log('ok')
        })
        db.ref(`/users/${otheruid}/followers`).push(myuid).then((r)=>{
            console.log('ok ')
        })
    }
    
}