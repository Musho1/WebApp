import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CloseCaruslePhotos } from '../../Redux/Action/CaruselAction'
import './Carusel.css'

function Carusel (props){
    const dispatch=useDispatch()
    const [photos,setphotos]=useState([])
    const {Activeindex}=useSelector((state)=>state.carusel)
    const [index,setindex]=useState(Activeindex)
  
        let temp=[]
        Object.values(props.img).forEach((elm)=>{
            temp.push(elm)
        })
    const setindexL=(index)=>{
        
        if(index!==0){
            setindex(index-1)
            return 0
        }
        if(index===0){
            setindex(temp.length-1)
            return 0
        }
    }
    const setindexR=(index)=>{
        if(index!==temp.length-1){
            setindex(index+1)
        }
        if(index===temp.length-1){
            setindex(0)
        }
    }
    console.log(temp.text)
    return <div className="carusel">
            <p className="closeCarusle" onClick={()=>dispatch(CloseCaruslePhotos())}>x</p>
            <button onClick={()=>setindexL(index)}>l</button>
                <div className="caruselitem">
                    <div className="Caruselitemimg">
                        <img src={temp[index].img}></img>
                    </div>
                    <div className="caruselTextDiv">
                        <div className="caruselText">
                            <p className="caruselTextData">{temp[index].date}</p>
                            <p>{temp[index].text}</p>
                        </div>
                    </div>
                </div>
            <button onClick={()=>setindexR(index)}>L</button>
    </div>
} 
export default Carusel