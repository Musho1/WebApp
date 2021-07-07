import firebase from 'firebase'
import { db } from '../../firebase'


const startSingUpUser=()=>{
    return {
        type:'startSingUpUser',
    }
}

export const SingUpUser=(user)=>{
    return (dispatch)=>{
        dispatch(startSingUpUser())
        firebase.auth().createUserWithEmailAndPassword(user.mail,user.password).then((r)=>{
            dispatch(endSingUpUser())
            db.ref(`/users/${r.user.uid}`).set({...user,uid:r.user.uid})
            // window.location.href='/'
        })
    }
}


const endSingUpUser=()=>{
    return {
        type:"endSingUpUser"
    }
}