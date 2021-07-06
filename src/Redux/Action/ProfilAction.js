import {db} from '../../firebase'
const startGetuserByUdi=()=>{
    return{
        type:'startGetuserByUdi'
    }
}


export const GetUserByUid=()=>{
    const uid=sessionStorage.getItem('uid')
    console.log(uid)
    return (dispatch)=>{
        dispatch(startGetuserByUdi())
        db.ref().child("users").child(uid).get().then((r)=>{
        dispatch(endGetUserByUid(r.val()))

        })
    }
}

const endGetUserByUid=(user)=>{
    return{
        type:'endGetUserByUid',
        user,
    }
}