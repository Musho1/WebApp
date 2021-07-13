import { useDispatch, useSelector } from 'react-redux'
import { closefollowerscomponent } from '../../Redux/Action/followersAction'
import './followers.css'
import FoloewersCard from './FoloewersCard'
function Followers(){
    const dispatch=useDispatch()
    const {following}=useSelector((state)=>state.user)
    return <div className="Followers">
        <div className="closebuttonfolowers" onClick={()=>dispatch(closefollowerscomponent())}><p>x</p></div>
        {
            following.map((elm,i)=>{
                return <FoloewersCard user={elm} key={i}></FoloewersCard>
            })
        }
    </div>
}
export default Followers