import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoginUser } from '../../Redux/Action/LoginAction'
import './Login.css'
function Login (){
    const [user,setuser]=useState({mail:'',password:''})
    const [error,seterror]=useState({errorMail:'',errorPassword:''})
    const[Type,settype]=useState('password')
    const Error=useSelector((state)=>state.login.error)
    const {loading}=useSelector((state)=>state.login)

    const dispatch=useDispatch()    

    const LoginProfil=()=>{
        let send=true
        if(user.mail===''){
            error.errorMail="Invalid email address"
            seterror({...error,errorMail:'Invalid email address'})
        }
        else{
            error.errorMail=""
            seterror({...error,errorMail:''})
        }
        if(user.password===''){
            error.errorPassword='Invalid password'
            seterror({...error,errorPassword:'Invalid password'})
        }
        else {
            error.errorPassword=''
            seterror({...error,errorPassword:''})
        }
        Object.values(error).forEach(elm=>{
            if(elm!==''){
                send=false
                
            }
        })
       
        if(send){
            dispatch(LoginUser(user))
        }        
    }
    
    return <div className="LoginBody">
        <div className="Login">
            <div className="LoginTitle">
                <h1>Login</h1>
            </div>
            <div className="LoginDiv">
                <i className="far fa-envelope"></i>
                <input value={user.mail} placeholder="Mail" onChange={(e)=>setuser({...user,mail:e.target.value})} ></input>
                <p className="errormessinge">{error.errorMail}</p>
            </div>
            <div className="LoginDiv">
                <i className="fas fa-lock"></i>
                <input value={user.password} placeholder="Password" type={Type} onChange={(e)=>setuser({...user,password:e.target.value})}></input>
                {
                   Type!=='password'?<i className="fas fa-eye-slash showpassword" onClick={()=>settype('password')}></i>:<i className="fas fa-eye showpassword" onClick={()=>settype('text')}></i>
                }
                <p className="errormessinge">{error.errorPassword}</p>
            </div>
          
            <div>
                <p className="errormessinge">{Error}</p>
            </div>
            <div className="buttondivLogin">
                <button onClick={()=>LoginProfil()}>Login {loading && <div className="loader">Loading...</div> }</button>
            </div>
           
            <div className="LinkDiv">
                <Link className="Link" to="/signup">Register New Account <i className="fas fa-arrow-right"></i></Link>
            </div>
        </div>
    </div>
}
export default Login