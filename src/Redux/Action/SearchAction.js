import {db} from '../../firebase'
export const SearchPeopel=(text)=>{
    let users=[]
    return (dispatch)=>{
        db.ref('/users').orderByChild('name').startAt(text).endAt(text+"\uf8ff").on('value', (r)=>{
            if(text.length>0){
                users.push(r.val())
            }
            dispatch(endSearchuser(users))
        })
    }
}

const endSearchuser=(value)=>{
        return {
        type:'endSearchuser',
        value,
    }
}