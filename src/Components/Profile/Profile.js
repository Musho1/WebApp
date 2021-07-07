import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ClosePopUp, GetUserByUid } from "../../Redux/Action/ProfilAction"
import NavBar from "../NavBar/NavBar"
import SuccesPopUp from "../PopUp/SuccesPopUp"
import MyProfil from "./MyProfil/MyProfil"
import './profil.css'

function Profile(props){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserByUid())
    },[])
    const {loading}=useSelector(state=>state.user)
    const {imgpogup}=useSelector(state=>state.user)
    if(imgpogup){
        {
            setTimeout(()=>{
                
                dispatch(ClosePopUp())
            },[7000])
        }
    }
    if(loading){
        return <div className="divSpiner">
            <div className="SpinerDiv">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    }
    else{
        return <div className="profil">
            
            <div>
                <NavBar></NavBar>
            </div>
            <div className="popup">
                {imgpogup && <SuccesPopUp text={'Success change Avatar'} />}
                
             </div>
            <div>
                <MyProfil></MyProfil>
            </div>
        </div>
    }
}
export default Profile