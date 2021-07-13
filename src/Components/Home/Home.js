import { useDispatch, useSelector } from "react-redux"
import { openfollowerscomponent } from "../../Redux/Action/followersAction"
import Followers from "../followers/followers"
import Profile from "../Profile/Profile"
import SubscribeCard from "../Subscribe/SubscribeCard"
import './Home.css'
function Home(){
    const {following,followingpost}=useSelector((state)=>state.user)
    const {openfollowers}=useSelector((state)=>state.followopen)
    const dispatch=useDispatch()
    return <Profile classname="Home">
        <div className="home">
            <div className="followerfollowinghome">
                <div>
                    <i className="fas fa-images"></i>
                    <p className="followerfollowinghomep"> Post</p>
                </div>
                <div onClick={()=>dispatch(openfollowerscomponent())}>
                    <i className="fas fa-user"></i>

                        <p>{following?following.length:0} followers</p> 
                       
                </div>
                <div>
                    <i className="fas fa-users"></i>
                    {
                        <p>0 following</p> 
                    }
                </div>
            </div>
            <div className="followerfollowinghomemobile">
                    <div>
                        <i className="fas fa-images"></i>
                    </div>
                    <div>
                        <div>
                            <i className="fas fa-user"></i>
                        </div>
                        <p>{following?following.length:0}</p>
                    </div>
                    <div>
                        <div>
                            <i className="fas fa-users"></i>
                        </div>    
                        <p>0</p> 
                    </div>
            </div>
            {openfollowers &&
                <div>
                    <Followers></Followers>
                </div>
            }
            <div className="texAreahome">
                <textarea placeholder="text..."></textarea>
                <div className="textAreaHomebutton">
                    <button>Publick</button>
                </div>
            </div>
            <div>
                { followingpost!== undefined &&
                    followingpost.sort((a,b)=>b.date-a.date).map((elm,i)=>{
                    return <SubscribeCard key={i} data={elm} user={following} ></SubscribeCard>
                    })
                }
            </div>
        </div>
       
    </Profile>
}   
export default Home