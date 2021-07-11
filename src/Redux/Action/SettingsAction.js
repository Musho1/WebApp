import {db} from '../../firebase'


export const SevNewSettings=(user)=>{
    const uid=sessionStorage.getItem('uid')
    return (dispatch)=>{
        dispatch(startSaveNewSettings())
        db.ref(`/users/${uid}`).update(user).then((r)=>{
            dispatch(endSaveNewSettings(user))
        })
    }
} 

const startSaveNewSettings=()=>{
    return {
        type:'startSaveNewSettings',
    }
}
const endSaveNewSettings=(user)=>{
    return {
        type:'endSaveNewSettings',
        user,
    }
}

export const closeSaveNewSettings=()=>{
    return {
        type:'SaveNewSettings',
        
    }
}