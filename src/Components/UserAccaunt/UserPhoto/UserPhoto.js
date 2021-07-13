import { useSelector } from "react-redux"
import UserAccaunt from "../UserAccaunt"
import Card from "../../Card/Card"
import "./UserPhoto.css"
import Carusel from "../../Carusel/Carusel"

function UserPhot(){
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)
    const {openCarusle}=useSelector((state)=>state.carusel)
    return <UserAccaunt className={openCarusle && 'opencaruseluseraccaunt'}>
        <div className="userPhotoTitle">
            <h1>Photo</h1>
        </div>
        {openCarusle &&
             <div className="ProfilCarusel">
                    <Carusel img={useraccauntdata.photos} ></Carusel>
             </div>
            }
        <div onClick={()=>{window.scrollTo(0,0)}} className="UserPhotosCardDiv">
            {useraccauntdata.photos!==undefined && (useraccauntdata.photos)!==null  ? Object.values(useraccauntdata.photos).map((elm,i)=>{
                return <Card data={elm} number={i} key={i}></Card>
            }):
            <div className="UserPhotoNoPhoto"><h1>No Photo</h1></div>
            }
        </div>
    </UserAccaunt>
}
export default UserPhot