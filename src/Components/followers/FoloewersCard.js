import { Link } from 'react-router-dom'
import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'
function  FoloewersCard(props){
    return <Link to={'user/'+`${props.user.uid}`} className="FoloewersCard">
        <div className="FoloewersCardAvatar">
            {props.user.avatar===undefined && props.user.gender==='male' &&
                <img src={male}></img>
            }
            {props.user.avatar===undefined && props.user.gender==='female' &&
                <img src={female}></img>
            }
            {props.user.avatar!==undefined && 
            <img src={props.user.avatar}></img>
            }
        </div>
        <div className="Folowerdata">
            <p>{props.user.name} {props.user.surname}</p>
        </div>
    </Link>
}
export default FoloewersCard