import { db } from "../../firebase"

export const UserAccauntData=(data,history)=>{
    // history.push(`user/${data.uid}`)    
    return {
        type:"UserAccauntData",
        data:data,
    }
}



export const GetUserAcccauntByUid=(uid)=>{
    console.log(uid)
    // yX9K4K2X4GVlCDBwu2JCJfs8DfD3
    return (dispatch)=>{
        // dispatch(startGetuserByUdi())
        db.ref().child("users").child(uid).get().then((r)=>{
        // history.push(`user/${data.uid}`)

        // dispatch(endGetUserByUid(r.val()))
        dispatch(UserAccauntData(r.val()))

        })
    }
}