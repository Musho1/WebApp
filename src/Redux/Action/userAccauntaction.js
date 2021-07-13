import { db } from "../../firebase"

export const UserAccauntData=(data,friend)=>{  
    return {
        type:"UserAccauntData",
        data:data,
        friend:friend,
    }
}


export const GetUserAcccauntByUid=(uid)=>{
    const myuid=sessionStorage.getItem('uid')
    return (dispatch)=>{
        dispatch(StartGetUserAcccauntByUid())
        db.ref().child("users").child(uid).get().then((r)=>{
            let k=false
            if(r.val().followers!==undefined)
                k=Object.values(r.val().followers).includes(myuid)
                dispatch(UserAccauntData(r.val(),k))
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
            dispatch(isfollowing())
        })
    }
    
}
const isfollowing=()=>{
    return {
        type:'isfollowing'
    }
}



export const unfollowing=(otheruid)=>{
    const myuid=sessionStorage.getItem('uid')
    return (dispatch)=>{
        db.ref(`/users/${myuid}/following/`).child(otheruid).remove().then((r)=>{
            dispatch(removeuserbyid(otheruid))
            dispatch(unfollowers(otheruid))
        })
    }       
}

const removeuserbyid=(uid)=>{
    return {
        type:'removeuserbyid',
        uid
    }
}

export const unfollowers=(otheruid)=>{
    const myuid=sessionStorage.getItem('uid')
    return dispatch=>{
        db.ref(`/users/${otheruid}/followers/`).child(myuid).remove().then((r)=>{
            console.log('removed')
        })
    }
}