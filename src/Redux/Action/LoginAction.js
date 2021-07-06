import firebase from 'firebase'
export const LoginUser=(user)=>{
    return  (dispatch)=>{
        dispatch(startLogin())
        firebase.auth().signInWithEmailAndPassword(user.mail,user.password).then((r)=>{
            console.log("Sssss")
            dispatch(endLogin())
            sessionStorage.setItem('uid',r.user.uid)
        })
        .catch((error)=>{
            dispatch(errorLogin(error.message))
        })
    }
}

const startLogin=()=>{
    return{
        type:'startLogin'
    }
}

const endLogin=(value)=>{
    console.log('ssss')
    return{
        type:'endLogin',
    }
}

const errorLogin=(error)=>{
    return{
        type:"errorLogin",
        error,
    }
}