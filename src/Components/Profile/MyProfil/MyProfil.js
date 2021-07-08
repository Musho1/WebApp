import { useSelector } from 'react-redux'
import female from '../../../Img/pngaaa.com-313414.png'
import male from '../../../Img/clipart2669241.png'
import './MyProfil.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SaveAvater } from '../../../Redux/Action/ProfilAction'
function MyProfil(){
    const {user}=useSelector(state=>state.user)
    const {SuccessChangeAvatar}=useSelector(state=>state.user)
    const [changeAvatar,setchangeAvatar]=useState('')
    const [change,setchange]=useState('')
    const [showbutton,setshowbutton]=useState(false)
    const dispatch=useDispatch()
    return <div className="MyProfil">
        
        <div className="profiledata">
            {!user.avatar && changeAvatar==='' &&
                <img className="avatar" src={user.gender==='female'?female:male} ></img>
            }
            {
                changeAvatar!=='' &&
                <img className="avatar" src={changeAvatar} ></img>
            }
            {
                user.avatar && changeAvatar==='' && SuccessChangeAvatar==='' &&
                <img className="avatar" src={user.avatar} ></img>
                
            }
            {
                 user.avatar && changeAvatar==='' && SuccessChangeAvatar!=='' && 
                 <img className="avatar" src={SuccessChangeAvatar} ></img>
            }
            <div className="container">
                <p>{user.name}</p>
                <p>{user.surname}</p>
            </div>
            <div className="file-input">
                <input type="file" id="file" className="file"  onChange={e=>{setchangeAvatar(URL.createObjectURL(e.target.files[0]))
                                                                            setchange(e.target.files[0])
                }}/>
                <label htmlFor="file" onClick={()=>setshowbutton(true)}><i className="fas fa-camera"></i></label>
            </div>
            
        </div>
            { showbutton&& 
                <div className="SaveCancleButon">
                    <button onClick={()=>{setchangeAvatar('')
                                          setshowbutton(false)
                }}>Cancle</button>
                    <button className="savebutton" onClick={()=>{
                        setshowbutton(false)
                        dispatch(SaveAvater(change))}}
                     >Save</button>
                        
                </div>
            }
    </div>
}
export default MyProfil