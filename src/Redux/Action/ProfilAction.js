import {db} from '../../firebase'
import firebase from 'firebase'


const startGetuserByUdi=()=>{
    return{
        type:'startGetuserByUdi'
    }
}


export const GetUserByUid=()=>{
    const uid=sessionStorage.getItem('uid')
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




export const SaveAvater=(elm)=>{
    const uid=sessionStorage.getItem('uid')
    return (dispatch)=>{
        firebase.storage().ref(`images/${uid}`).child(uid).put(elm).then((r)=>{
            firebase.storage().ref().child(`images/${uid}`).getDownloadURL().then((url)=>{
                db.ref(`/users/${uid}/avatar`).set(url).then((r)=>{
                    dispatch(successchangeavatar(url))
                })
            })
        })
    }
}
const successchangeavatar=(value)=>{
    return {
        type:'successchangeavatar',
        value,
    }
}



export const ClosePopUp=()=>{
    return {
        type:'ClosePopUp'
    }
}