import male from '../../Img/clipart2669241.png'
import female from '../../Img/pngaaa.com-313414.png'

function SearchCard(props){
    return <div className="searchcard">
        <div className="searchcardImg">
        {
            (props.searchuser.avatar===undefined ||props.searchuser.avatar===null) && props.searchuser.gender==='male' &&
            <img src={male}></img>
          
        }
        {   (props.searchuser.avatar===undefined ||props.searchuser.avatar===null) && props.searchuser.gender==='female' &&
            <img src={female}></img>
        }
        {
            props.searchuser.avatar!==undefined && props.searchuser.avatar!==null && 
            <img src={props.searchuser.avatar}></img>
        }
        </div>
        <div className="searchimgData">
           <p> {props.searchuser.name} {props.searchuser.surname } </p>
        </div>
    </div>
}
export default SearchCard