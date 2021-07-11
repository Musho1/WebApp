import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { OpenSelectImg,} from "../../Redux/Action/PhotoAction"
import Card from "../Card/Card"
import Profile from "../Profile/Profile"
import SelectImg from "../SelectImg/SelectImg"
import './Photos.css'

function Photos(){
    const dispatch=useDispatch()
    const photos=useSelector((state)=>state.user)
    const {selectImg}=useSelector((state)=>state.photo)
    const [imgurl,setimgurl]=useState('')
    const [select,setselect]=useState('')
    const openSelectImg=(e)=>{
        if(e!==''){
            dispatch(OpenSelectImg())
        }
    }

    return <Profile   props={selectImg}>
        <h1 className="photostitle">Photos</h1>
        <div className="PhotosoSelectDiv">
            <label htmlFor="myfile" className="label">Выберите файлы</label>
            <input  className="my" id="myfile" name="myfile" multiple type="file" onChange={(e)=>{setselect(URL.createObjectURL(e.target.files[0]))
                                               openSelectImg(e.target.files[0])
                                               setimgurl(e.target.files[0])
             } 
                                                
            }></input>
        </div>
        <div className="PhotosoSelectDiv">
            {
                selectImg && 
                <SelectImg img={select} imgUrl={imgurl}></SelectImg>
            }
        </div>

        <div onClick={()=>{window.scrollTo(0,0)}} className="PhotosCardDiv">
            {photos.user.photos!==undefined && (photos.user.photos)!==null  && Object.values(photos.user.photos).map((elm,i)=>{
                return <Card data={elm} number={i} key={i}></Card>
            })}
          
        </div>
    </Profile>
}
export default Photos