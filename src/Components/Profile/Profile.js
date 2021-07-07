import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetUserByUid } from "../../Redux/Action/ProfilAction"
import NavBar from "../NavBar/NavBar"
import MyProfil from "./MyProfil/MyProfil"
import './profil.css'

function Profile(props){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserByUid())
    },[])
    const {loading}=useSelector(state=>state.user)
    if(loading){
        return <div className="divSpiner">
            <div className="SpinerDiv">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    }
    else{
        return <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <MyProfil></MyProfil>
            </div>
        </div>
    }
}
export default Profile