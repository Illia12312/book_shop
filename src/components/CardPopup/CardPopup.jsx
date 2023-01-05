import "./CardPopup.css";
import closer from "../../img/icons/closer.svg"

const CardPopup = ({active, setActive}) =>{

    return(
        <div className={active ? "cardPopup active" : "cardPopup"}>
            <div className="cardPopupContent" onClick={e => e.stopPropagation()}>
                <img src={closer} className="cardPopupCloser" alt="click" onClick={() => setActive(false)}></img>
            </div>
        </div>
    )
}

export default CardPopup;