import { useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'
import { UserAccauntData } from '../../Redux/Action/userAccauntaction'

function SearchCard(props){
    const history=useHistory()
    const dispatch=useDispatch()
    console.log(props.searchuser.uid)
    return <div className="searchcard" onClick={()=>dispatch(UserAccauntData(props.searchuser,history))}>
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
    </div>
}
export default SearchCard
