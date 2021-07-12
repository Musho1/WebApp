import "./UserNav.css"
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux"
function UserNav(){
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)

    return <div>
        <nav className="UserNav">
            <ul className="usernav">
                <li>
                   <Link to={`/user/photo/${useraccauntdata.uid}`}> <i className="far fa-image"></i> Photo</Link>
                </li>
                <li>
                    <Link to={`/user/info/${useraccauntdata.uid}`}><i className="fas fa-info-circle"></i> Info</Link>
                </li>
            </ul>
            <ul className="mobileusernav">
                <li>
                    <Link to={`/user/photo/${useraccauntdata.uid}`}> <i className="far fa-image"></i></Link>
                </li>
                <li>
                    <Link to={`/user/info/${useraccauntdata.uid}`}><i className="fas fa-info-circle"></i></Link>
                </li>
            </ul>
        </nav>
    </div>
}
export default UserNav