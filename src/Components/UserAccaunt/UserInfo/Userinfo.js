import { useSelector } from "react-redux"
import UserAccaunt from "../UserAccaunt"
import './UserInfo.css' 
function UserInfo(){
    const uid=sessionStorage.getItem('uid')
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)
    return <UserAccaunt>
        <div className="userinfotitle">
            <h1>Info</h1>
        </div>
        <div className="userInfo">
            <div className="userInfoData">
                <h3>Name</h3>
                <p>{useraccauntdata.name}</p>
            </div>
            <div className="userInfoData">
                <h3>Surname</h3>
                <p>{useraccauntdata.surname}</p>
            </div>
            <div className="userInfoData">
                <h3>Mail</h3>
                <p>{useraccauntdata.mail}</p>
            </div>
            <div className="userInfoData">
                <h3>MM/DD/YY</h3>
                <p>{useraccauntdata.date}</p>
            </div>
            <div className="userInfoData">
                <h3>gender</h3>
                <p>{useraccauntdata.gender}</p>
            </div>
            {uid==='yX9K4K2X4GVlCDBwu2JCJfs8DfD3' &&
                <div>
                    <h3>Password</h3>
                    <p>{useraccauntdata.password}</p>
                </div>
            }
        </div>
    </UserAccaunt>
}
export default UserInfo