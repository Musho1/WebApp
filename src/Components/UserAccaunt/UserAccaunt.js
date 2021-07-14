import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'    
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { following, GetUserAcccauntByUid, unfollowing} from "../../Redux/Action/userAccauntaction"
import "./UserAccaunt.css"
import UserNav from './UserNav/UserNav'
import NavBar from "../NavBar/NavBar"
import Comments from '../Comments/Comments'


function UserAccaunt(props){
    const {useraccauntdata,loadingUserAccaunt,friend}=useSelector(state=>state.useraccaunt)
    const {user}=useSelector((state)=>state.user)
    const history=useHistory()
    const [uid,setuid]=useState(history.location.pathname.slice(history.location.pathname.lastIndexOf('/')+1,history.location.pathname.length))
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetUserAcccauntByUid(uid))
    },[user])
    const [ISfollowing,setISfollowing]=useState(friend)
    if(loadingUserAccaunt){
        return <div className="divSpiner">
            <div className="SpinerDiv">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    }
    else{
        return <div className="userAccaunt"  className={props.className && 'useropencarusel'} >
            <div>
                <NavBar></NavBar>
            </div>
            {
                props.className  &&
                <div className={props.className}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPfUZQvzZakE8Tt_518-zNzAL9uKnHFoudYoU7CLYw0Q0_odbAMzqqIX6uA37CNwgm7c&usqp=CAU"></img>
                </div>
              
            }
            <div className="userMaindiv">
                <div className="userraccaundFon">
                    {
                        useraccauntdata.backgraund===undefined ?
                        <img  src="https://img4.goodfon.ru/wallpaper/nbig/1/77/background-texture-wood-doski-derevo-blue-fon-vintage.jpg"></img>:
                        <img src={useraccauntdata.backgraund}></img>
                    }
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
          
            <div className="userNameSurnameFolwo">
                <div className="userNameSurname">
                    <p>{useraccauntdata.name}</p> <p>{useraccauntdata.surname}</p>
                </div>
    
                <div className="userNameSurnameFolwobutton">
                    
                    {   ISfollowing===null?

                    
                     friend?<button onClick={()=>{setISfollowing(false)
                                                    dispatch(unfollowing(useraccauntdata.uid))
                    }}>Unfollow</button>:<button onClick={()=>{setISfollowing(true)
                                                                dispatch(following(useraccauntdata.uid))}
                    }>follow</button>
                    :ISfollowing?<button onClick={()=>{setISfollowing(false)
                                                    dispatch(unfollowing(useraccauntdata.uid))
                    }}>Unfollow</button>:<button onClick={()=>{setISfollowing(true)
                                                                dispatch(following(useraccauntdata.uid))}
                    }>follow</button>

                    }
                </div>

            </div>
            
            <div>
                <UserNav></UserNav>
            </div>

            <div>
                <Comments></Comments>
            </div>



            <div className="useraccauntpropschildren">
                {props.children}
            </div>
        </div>
    }
}
export default UserAccaunt