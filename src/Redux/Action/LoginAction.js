import firebase from 'firebase'
export const LoginUser=(user,history)=>{
    return (dispatch)=>{
        dispatch(startLogin())
        firebase.auth().signInWithEmailAndPassword(user.mail,user.password).then((r)=>{
            dispatch(endLogin())
            sessionStorage.setItem('uid',r.user.uid)
            history.push('/profile')
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
