import { useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'
import {Link} from "react-router-dom"
import { UserAccauntData } from '../../Redux/Action/userAccauntaction'

function SearchCard(props){
    const history=useHistory()
    const dispatch=useDispatch()
    console.log(props.searchuser.uid)
    return <Link className="searchcard" to={`/user/${props.searchuser.uid}`}>
        <div className="searchcardImg">
        
        {
            (props.searchuser.avatar===undefined ||props.searchuser.avatar===null) && props.searchuser.gender==='male' &&
            <img src={male}></img>
          
        }
        {   (props.searchuser.avatar===undefined ||props.searchuser.avatar===null) && props.searchuser.gender==='female' &&
            <img src={female}></img>
        }
        {
            props.searchuser.avatar!==undefined && props.searchuser.avatar!==null && 
            <img src={props.searchuser.avatar}></img>
        }
        </div>
        <div className="searchimgData">
           <p> {props.searchuser.name} {props.searchuser.surname } </p>
        </div>
    </Link>
}
export default SearchCard
