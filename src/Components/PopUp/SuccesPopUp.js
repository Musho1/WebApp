import './SuccesPopUp.css'

function SuccesPopUp(props){
    console.log(props)
    return <div className="SuccesPopUp">
        <i className="far fa-check-circle SuccesPopUpicon" ></i>
        <p>{props.text}</p>
    </div>
}
export default SuccesPopUp