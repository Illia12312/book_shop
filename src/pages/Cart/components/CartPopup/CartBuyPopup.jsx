import "./CartBuyPopup.css";
import closer from "../../../../img/icons/closer.svg";

//после покупки корзина очищаеться
// наша служба поддержки свяжеться с вами для подтверждения платежа

const CartBuyPopup = ({activePopup, setActivePopup}) =>{
    return(
        <div className={activePopup ? "CartBuyPopup active" : "CartBuyPopup"} onClick={() => {setActivePopup(false);}}>
            <div className={activePopup ? "CartBuyPopupContent active" : "CartBuyPopupContent"} onClick={e => e.stopPropagation()}>
                <img src={closer} alt="click" className="CartBuyPopupCloser" onClick={() => setActivePopup(false)}/>
                <h3 className="CartBuyPopupTitle">ОФОРМЛЕНИЕ ЗАКАЗА</h3>
            </div>
        </div>
    )
}

export default CartBuyPopup;