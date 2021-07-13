import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ClosePopUpSuccessSaveimg } from "../../Redux/Action/PhotoAction"
import { closebackgraundpopup, ClosePopUp, GetUserByUid } from "../../Redux/Action/ProfilAction"
import NavBar from "../NavBar/NavBar"
import SuccesPopUp from "../PopUp/SuccesPopUp"
import MyProfil from "./MyProfil/MyProfil"
import Carusel from '../Carusel/Carusel'
import './profil.css'
import { closeSaveNewSettings } from "../../Redux/Action/SettingsAction"

function Profile(props){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserByUid())
    },[])
    const {imgpogup,settingPopUp,loading}=useSelector(state=>state.user)
    const {openPopUpImg}=useSelector((state)=>state.photo)
    const {openCarusle}=useSelector((state)=>state.carusel)
    const {photos}=useSelector((state)=>state.user.user)
    const {backgraundPopUp}=useSelector((state)=>state.user)

    if(imgpogup){
        {
            setTimeout(()=>{
                
                dispatch(ClosePopUp())
            },[5000])
        }
    }
    if(openPopUpImg ){
        {
            setTimeout(()=>{
                
                dispatch(ClosePopUpSuccessSaveimg())
            },[5000])
        }
    }
    if(settingPopUp){
        {
            setTimeout(()=>{
                
                dispatch(closeSaveNewSettings())
            },[5000])
        }
    }
    if(backgraundPopUp){
            setTimeout(()=>{
                dispatch(closebackgraundpopup())
            },[5000])
        
    }
    if(loading){
        return <div className="divSpiner">
            <div className="SpinerDiv">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    }
    else{
        return <div   className="profil" className={openCarusle && 'OpenCarusel'} >
            <div>
                <NavBar></NavBar>
            </div>
            {(props.props || openCarusle) && 
                <img className='backopacity' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPstb96OBKy17BhjwJ5hXTU126JHc7FXActjt9zgC_STeY7Wq1SXEjTyXRtJib-rd9_gw&usqp=CAU'}></img>
            }
            <div className="popup">
                {imgpogup && <SuccesPopUp text={'Success change Avatar'} />}
                {openPopUpImg && <SuccesPopUp text={'Success save photo'} />}
                {settingPopUp && <SuccesPopUp text={'Success change data'} />}
                {backgraundPopUp && <SuccesPopUp text={'Success change backgraund'} />}
                
             </div>

            {openCarusle &&
             <div className="ProfilCarusel">
                    <Carusel img={photos} ></Carusel>
             </div>
            }

            <div className={props.classname?'Home': 'profilitem'}>
                <MyProfil className={props.classname &&'HomeMyProfile'}></MyProfil> 
                <div className={props.classname?'propschildrenhome':'propschildren'}>
                    {props.children}
                </div>
            </div>
        </div>
    }
}
export default Profile