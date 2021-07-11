import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { GetUserAcccauntByUid} from "../../Redux/Action/userAccauntaction"
import "./UserAccaunt.css"
function UserAccaunt(){
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)
    const history=useHistory()
    const [uid,setuid]=useState(history.location.pathname.slice(history.location.pathname.lastIndexOf('/')+1,history.location.pathname.length))
    const dispatch=useDispatch()
    console.log(useraccauntdata)
    useEffect(()=>{
        dispatch(GetUserAcccauntByUid(uid))
        console.log('ss')
    },[])
    return <div className="userAccaunt">
        <div className="userMaindiv">
            <div className="userraccaundFon">
                <img src="https://img4.goodfon.ru/wallpaper/nbig/1/77/background-texture-wood-doski-derevo-blue-fon-vintage.jpg"></img>
            </div>
            <div className="userAvatar">
                <img src={useraccauntdata.avatar}></img>
            </div>
        </div>
    </div>
}
export default UserAccaunt