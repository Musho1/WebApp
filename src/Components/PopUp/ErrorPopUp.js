import './SuccesPopUp.css'

function ErrorPopUp(props){
    return <div className="SuccesPopUp">
        <i class="fas fa-times ErrorPopUpicon"></i>
        <p>{props.text}</p>
    </div>
}
export default ErrorPopUp