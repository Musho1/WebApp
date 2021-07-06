import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetUserByUid } from "../../Redux/Action/ProfilAction"

function Profile(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserByUid())
    },[])
    const {user}=useSelector(state=>state.user)
    console.log(user)
    return <div>ok</div>
}
export default Profile