import firebase from 'firebase'
import { db } from '../../firebase'


const startSingUpUser=()=>{
    return {
        type:'startSingUpUser',
    }
}

export const SingUpUser=(user,history)=>{
    return (dispatch)=>{
        dispatch(startSingUpUser())
        firebase.auth().createUserWithEmailAndPassword(user.mail,user.password).then((r)=>{
            dispatch(endSingUpUser())
            db.ref(`/users/${r.user.uid}`).set({...user,uid:r.user.uid})
            history.push('/')
        })
        .catch((error)=>{
            console.log(error.message)
            dispatch(ErrorSingUp(error))
        })
    }
}


const endSingUpUser=()=>{
    return {
        type:"endSingUpUser"
    }
}


const ErrorSingUp=(error)=>{
    return {
        type:'ErrorSingUp',
        error
    }
}