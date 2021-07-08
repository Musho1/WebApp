import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ClosePopUpSuccessSaveimg } from "../../Redux/Action/PhotoAction"
import { ClosePopUp, GetUserByUid } from "../../Redux/Action/ProfilAction"
import NavBar from "../NavBar/NavBar"
import SuccesPopUp from "../PopUp/SuccesPopUp"
import MyProfil from "./MyProfil/MyProfil"
import Carusel from '../Carusel/Carusel'
import './profil.css'

function Profile(props){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserByUid())
    },[])
    const {loading}=useSelector(state=>state.user)
    const {imgpogup}=useSelector(state=>state.user)
    const {openPopUpImg}=useSelector((state)=>state.photo)
    const {openCarusle}=useSelector((state)=>state.carusel)
    const {photos}=useSelector((state)=>state.user.user)
    console.log(photos)
    if(imgpogup){
        {
            setTimeout(()=>{
                
                dispatch(ClosePopUp())
            },[7000])
        }
    }
    if(openPopUpImg){
        {
            setTimeout(()=>{
                
                dispatch(ClosePopUpSuccessSaveimg())
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
        return <div className="profil" >
            
            <div>
                <NavBar></NavBar>
            </div>
            {props.props || openCarusle&& 
                <img className='backopacity' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPstb96OBKy17BhjwJ5hXTU126JHc7FXActjt9zgC_STeY7Wq1SXEjTyXRtJib-rd9_gw&usqp=CAU'}></img>
            }
            <div className="popup">
                {imgpogup && <SuccesPopUp text={'Success change Avatar'} />}
                {openPopUpImg && <SuccesPopUp text={'Success save photo'} />}
             </div>

            {openCarusle &&
             <div className="ProfilCarusel">
                    <Carusel img={photos} ></Carusel>
             </div>
            }

            <div className="profilitem">
                <MyProfil></MyProfil> 
                <div className="propschildren">
                    {props.children}
                </div>
            </div>
        </div>
    }
}
export default Profile