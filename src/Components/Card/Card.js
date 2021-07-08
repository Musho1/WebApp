import { useDispatch } from 'react-redux'
import { OpenCaruselPhotos } from '../../Redux/Action/CaruselAction'
import './Card.css'

function Card (props){
    const dispatch=useDispatch()
    return <div className="PhotoCard" onClick={()=>{dispatch(OpenCaruselPhotos(props.number))}}>
        <div className="CardPhotosDiv">
            <img src={props.data.img}></img>
        </div>
        <div className="CardPhotosText">
            <p>{props.data.text}</p>
        </div>
        <div className="CardPhotosdate">
            <p>{props.data.date}</p>
        </div>
    </div>
}   
export default Card