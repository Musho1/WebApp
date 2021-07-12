import { useSelector } from 'react-redux'
import female from '../../../Img/pngaaa.com-313414.png'
import male from '../../../Img/clipart2669241.png'
import './MyProfil.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SaveAvater } from '../../../Redux/Action/ProfilAction'
function MyProfil(props){
    const {user}=useSelector(state=>state.user)
    const {SuccessChangeAvatar}=useSelector(state=>state.user)
    const [changeAvatar,setchangeAvatar]=useState('')
    const [change,setchange]=useState('')
    const [showbutton,setshowbutton]=useState(false)
    const dispatch=useDispatch()
    return <div  className={props.className?'HomeMyProfile':'MyProfil'}>
        
        <div className={props.className?'HomeMyProfiledata':'profiledata'}>
            {
                props.className &&
                <div className="HomeAvatarBackgraund">
                    <div className="HomeFone">
                        <img  src="https://img4.goodfon.ru/wallpaper/nbig/1/77/background-texture-wood-doski-derevo-blue-fon-vintage.jpg"></img>
                    </div>
                    <div className="Homeavatar">

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
                        <div className="file-input " className={props.className && "file-input-home"}>
                <input type="file" id="file" className="file"  onChange={e=>{setchangeAvatar(URL.createObjectURL(e.target.files[0]))
                                                                            setchange(e.target.files[0])
                }}/>
                <label htmlFor="file" onClick={()=>setshowbutton(true)}><i className="fas fa-camera"></i></label>
            </div>
                    </div>
                </div>
                }
            
            { !props.className && !user.avatar && changeAvatar==='' &&
                <img className="avatar" src={user.gender==='female'?female:male} ></img>
            }
            {
                !props.className && changeAvatar!=='' &&
                <img className="avatar" src={changeAvatar} ></img>
            }
            {
                !props.className &&user.avatar && changeAvatar==='' && SuccessChangeAvatar==='' &&
                <img className="avatar" src={user.avatar} ></img>
                
            }
            {
                !props.className &&user.avatar && changeAvatar==='' && SuccessChangeAvatar!=='' && 
                <img className="avatar" src={SuccessChangeAvatar} ></img>
            }
            <div className={props.className?"HomeDataNameSurame":'container'}>
                <p>{user.name}</p>
                <p>{user.surname}</p>
            </div>
           
            
        </div>
            { showbutton&& 
                <div className="SaveCancleButon" className="homeSaveButton">
                    <button onClick={()=>{setchangeAvatar('')
                                          setshowbutton(false)
                }}>Cancle</button>
                    <button className="savebutton"  onClick={()=>{
                        setshowbutton(false)
                        dispatch(SaveAvater(change))}}
                     >Save</button>
                        
                </div>
            }
    </div>
}
export default MyProfil