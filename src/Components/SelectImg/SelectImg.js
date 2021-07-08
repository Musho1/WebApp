import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSelectImg, SevePhoto } from '../../Redux/Action/PhotoAction'
import './SelectImg.css'


function SelectImg(props){


    const [text,settext]=useState('')
    const dispatch=useDispatch()
    const {loading}=useSelector((state)=>state.photo)
    return <div className="SelectImg">
        <div className="closeselectimg" onClick={()=>dispatch(closeSelectImg())}>
            <p>x</p>
        </div>
        {loading &&
            <div className="selectimgspinerdiv">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        }    
        <img src={props.img}></img>
        <div className="selectdivtextinput">
            <textarea placeholder="Text..." type="text" className="selectdivtextinput" onChange={(e)=>settext(e.target.value)}></textarea>
        </div>
        <div className="selectdivtextbutton">
            <button disabled={loading} onClick={()=>dispatch(closeSelectImg())}>Close</button>
            <button disabled={loading} onClick={()=>dispatch(SevePhoto(props.imgUrl,text))} className="selectdivtextbuttonsave">Save</button>
        </div>
    </div>
}
export default SelectImg