import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'    
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { GetUserAcccauntByUid} from "../../Redux/Action/userAccauntaction"
import "./UserAccaunt.css"
import UserNav from './UserNav/UserNav'
function UserAccaunt(props){
    const {useraccauntdata,loadingUserAccaunt}=useSelector(state=>state.useraccaunt)
    const history=useHistory()
    const [uid,setuid]=useState(history.location.pathname.slice(history.location.pathname.lastIndexOf('/')+1,history.location.pathname.length))
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserAcccauntByUid(uid))
    },[])
    if(loadingUserAccaunt){
        return <div className="divSpiner">
            <div className="SpinerDiv">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    }

    else
    return <div className="userAccaunt">
        <div className="userMaindiv">
            <div className="userraccaundFon">
                <img  src="https://img4.goodfon.ru/wallpaper/nbig/1/77/background-texture-wood-doski-derevo-blue-fon-vintage.jpg"></img>
            </div>
            <div className="userAvatar">
                {useraccauntdata.avatar===undefined && useraccauntdata.gender==="male" &&
                    <img src={male}></img>
                }
                {useraccauntdata.avatar===undefined && useraccauntdata.gender==="female" &&
                    <img src={female}></img>
                }
                {
                    useraccauntdata.avatar!==undefined &&
                    <img src={useraccauntdata.avatar}></img>
                }
            </div>
         
        </div>
        <div>
            <UserNav></UserNav>
        </div>
        <div className="useraccauntpropschildren">
            {props.children}
        </div>
    </div>
}
export default UserAccaunt