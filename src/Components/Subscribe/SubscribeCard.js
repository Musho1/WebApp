import './SubscribeCard.css'
import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'
function SubscribeCard(props){
    let user=[]
    props.user.forEach((elm)=>{
        if(elm.photos!==undefined){
            Object.values(elm.photos).forEach(elm2=>{
                if(elm2.img===props.data.img){
                    user=elm
                }
            })
        }
        if(props.data.img===undefined && elm.status!==undefined){
            Object.values(elm.status).forEach((elm2)=>{
                if(elm2.uid===props.data.uid){
                    user=elm
                }
            })
        }
        
        
    })
    return <div className={props.data.img ? 'subscribe':'subscribestatus'}>
        <div className="subscribedata">
            <div className="subscribeuserdata">
                {!user.avatar && user.gender==='male' &&
                    <img src={male}></img>
                }
                {!user.avatar && user.gender==='female' &&
                    <img src={female}></img>
                }
                {user.avatar && 
                    <img src={user.avatar}></img>
                } 
                <div className="subscribeuserdatanamesuernam">
                    <p>{user.name}</p><p>{user.surname}</p>
                </div>  
            </div>
            <div className="subscribeuserdate">
                <p>{new Date(props.data.date).toDateString().toString()}</p>
            </div>
        </div>
        {props.data.img &&
            <div className="subscribepost">
                <img src={props.data.img}></img>
            </div>
        }
        {!props.data.img &&
        <div className="subscribepoststatus">
             <p>{props.data.text}</p>
         </div>
        }
       
        <div className="subscribelike">
            <div><i className="far fa-heart"></i></div>
            <div><i className="far fa-comment"></i></div>
            <div><i className="far fa-bookmark"></i></div>
        </div>
    </div>
}
export default SubscribeCard