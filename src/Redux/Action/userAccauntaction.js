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