import { useDispatch, useSelector } from 'react-redux'
import { closefollowerscomponent } from '../../Redux/Action/followersAction'
import './followers.css'
import FoloewersCard from './FoloewersCard'
function Followers(props){
    const dispatch=useDispatch()
    const {following,followers}=useSelector((state)=>state.user)
    return <div className="Followers">
        <div className="closebuttonfolowers" onClick={()=>dispatch(closefollowerscomponent())}><p>x</p></div>
        <h1>{props.title}</h1>
        {props.title==='Followers' && following!==undefined &&
            following.map((elm,i)=>{
                return <FoloewersCard user={elm} key={i}></FoloewersCard>
            })
        }
        {props.title==='Following' && followers!==undefined &&
            followers.map((elm,i)=>{    
                return <FoloewersCard user={elm} key={i}></FoloewersCard>
            })
        }
    </div>
}
export default Followers