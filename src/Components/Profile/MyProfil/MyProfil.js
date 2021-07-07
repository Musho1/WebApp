import { useSelector } from 'react-redux'
import female from '../../../Img/pngaaa.com-313414.png'
import male from '../../../Img/clipart2669241.png'
import './MyProfil.css'
import { useState } from 'react'
function MyProfil(){
    const {user}=useSelector(state=>state.user)
    const [changeAvatar,setchangeAvatar]=useState('')

    return <div className="MyProfil">
        <div className="profiledata">
            {!user.avatar && changeAvatar==='' &&
                <img className="avatar" src={user.gender==='female'?female:male} ></img>
            }
            {
                changeAvatar!=='' &&
                <img className="avatar" src={changeAvatar} ></img>
            }
            <div className="container">
                <p>{user.name}</p>
                <p>{user.surname}</p>
            </div>
            <div className="file-input">
                <input type="file" id="file" className="file"  onChange={e=>setchangeAvatar(URL.createObjectURL(e.target.files[0]))}/>
                <label htmlFor="file"><i className="fas fa-camera"></i></label>
            </div>
            
        </div>
            { changeAvatar!=='' &&
                <div className="SaveCancleButon">
                    <button className="savebutton">Save</button>
                    <button onClick={()=>setchangeAvatar('')}>Cancle</button>
                </div>
            }
    </div>
}
export default MyProfil