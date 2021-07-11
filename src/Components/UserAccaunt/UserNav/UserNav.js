import "./UserNav.css"
import {Link} from 'react-router-dom'
import UserAccaunt from "../UserAccaunt"
import { useSelector } from "react-redux"
function UserNav(){
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)

    return <div>
        <nav className="UserNav">
            <ul>
                <li>
                   <Link to={`/user/photo/${useraccauntdata.uid}`}> <i className="far fa-image"></i> Photo</Link>
                </li>
            </ul>
        </nav>
    </div>
}
export default UserNav