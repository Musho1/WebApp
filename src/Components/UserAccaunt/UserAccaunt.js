import { useSelector } from "react-redux"

function UserAccaunt(){
    const {useraccauntdata}=useSelector(state=>state.useraccaunt)
    console.log(useraccauntdata)
    return <div>
    </div>
}
export default UserAccaunt