import { useSelector } from "react-redux"
import UserAccaunt from "../UserAccaunt"
import Card from "../../Card/Card"
import "./UserPhoto.css"

function UserPhot(){
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)
    console.log(useraccauntdata.photos)
    return <UserAccaunt>
        <div className="userPhotoTitle">
            <h1>Photo</h1>
        </div>
        <div onClick={()=>{window.scrollTo(0,0)}} className="PhotosCardDiv">
            {useraccauntdata.photos!==undefined && (useraccauntdata.photos)!==null  && Object.values(useraccauntdata.photos).map((elm,i)=>{
                console.log(elm)
                return <Card data={elm} number={i} key={i}></Card>
            })}
          
        </div>
    </UserAccaunt>
}
export default UserPhot