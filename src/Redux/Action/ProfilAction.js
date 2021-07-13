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
        dispatch(Getuserfollowing(r.val()))
        dispatch(Getuserfollowers(r.val()))
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
        firebase.storage().ref(`images/`).child(uid).put(elm).then((r)=>{
            firebase.storage().ref().child(`images/${uid}`).getDownloadURL().then((url)=>{

                db.ref(`/users/${uid}/avatar`).set(url).then((r)=>{
                    dispatch(successchangeavatar(url))
                })
            })
        })
    }
}

export const savebackgraundfon=(elm)=>{
    return (dispatch=>{
        const uid=sessionStorage.getItem('uid')
        firebase.storage().ref(`backgraund/`).child(uid).put(elm).then((r)=>{
            firebase.storage().ref().child(`backgraund/${uid}`).getDownloadURL().then((url)=>{
                db.ref(`/users/${uid}/backgraund`).set(url).then((r)=>{
                    console.log('ok')
                    dispatch(successchangeavatarBackgraund(url))
                })
            })
        })
    })
}
export const closebackgraundpopup=()=>{
    return{
        type:'closebackgraundpopup'
    }
}
const successchangeavatarBackgraund=(value)=>{
    return {
        type:'successchangeavatarBackgraund',
        value,
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



export const Getuserfollowing=(user)=>{
    return (dispatch)=>{
        if(user.following)
        Object.values(user.following).forEach((elm)=>{{
            db.ref().child("users").child(elm).get().then((r)=>{
                dispatch(endgetmyfollowing(r.val()))
            })
        }})
    }
}

//
export const Getuserfollowers=(user)=>{
    return (dispatch)=>{
        if(user.followers)
        Object.values(user.followers).forEach((elm)=>{{
            db.ref().child("users").child(elm).get().then((r)=>{
                dispatch(endgetmyfollowers(r.val()))
            })
        }})
    }
} 

const endgetmyfollowing=(value)=>{
    return {
        type:'endgetmyfollowing',
        value
    }
}




const endgetmyfollowers=(value)=>{
    return {
        type:'endgetmyfollowers',
        value,
    }
}