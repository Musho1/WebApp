import firebase from "firebase"
import {db} from '../../firebase'
export const SevePhoto=(elm,text)=>{
    const uid=sessionStorage.getItem('uid')
    const d=Date.now();
    return (dispatch)=>{
            dispatch(SeveImgLoadingStart())
        firebase.storage().ref(`Photos/${uid}`).child(uid+d).put(elm).then((r)=>{
           firebase.storage().ref().child(`Photos/${uid}/${uid+d}`).getDownloadURL().then((url)=>{
                db.ref(`/users/${uid}/photos`).push({img:url,text:text,date:d}).then((r)=>{
                    dispatch(closeSelectImg())
                    dispatch(OpenPopUpSuccessSaveimg())
                    dispatch(addphoto({img:url,text:text,date:d}))
                })
            })
        })
    }
}


export const addphoto=(value)=>{
    return {
        type:'addphoto',
        value
    }
}


export const closeSelectImg=()=>{
    return{
        type:"closeSelectImg"
    }
}
export const OpenSelectImg=()=>{
    return {
        type:"OpenSelectImg"
    }
}

const OpenPopUpSuccessSaveimg=(value)=>{
    return{
        type:"OpenPopUpSuccessSaveimg",
        value,
    }
}
export const ClosePopUpSuccessSaveimg=()=>{
    return{
        type:"ClosePopUpSuccessSaveimg"
    }
}


const SeveImgLoadingStart=()=>{
    return {
        type:'SeveImgLoadingStart'
    }
}