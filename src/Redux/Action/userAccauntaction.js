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

        db.ref(`/users/${myuid}/following/${otheruid}`).set(otheruid).then((r)=>{
            console.log('ok')
        })
        db.ref(`/users/${otheruid}/followers/${myuid}`).set(myuid).then((r)=>{
            console.log('ok ')
        })
    }
    
}



export const unfollowing=(otheruid)=>{
    const myuid=sessionStorage.getItem('uid')
    return (dispatch)=>{
        db.ref(`/users/${myuid}/following/`).child(otheruid).remove().then((r)=>{
            console.log('removed')
        })
    }       
}