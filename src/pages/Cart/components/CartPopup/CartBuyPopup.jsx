import "./CartBuyPopup.css";
import closer from "../../../../img/icons/closer.svg";
import {useNavigate} from 'react-router-dom';


const CartBuyPopup = ({activePopup, setActivePopup, setActive}) =>{
    const navigate = useNavigate();
    const backFunc = (setActive) =>{
        setActive(false);
        navigate("/");
    }

    return(
        <div className={activePopup ? "CartBuyPopup active" : "CartBuyPopup"} onClick={() => backFunc(setActive)}>
            <div className={activePopup ? "CartBuyPopupContent active" : "CartBuyPopupContent"} onClick={e => e.stopPropagation()}>
                <img src={closer} alt="click" className="CartBuyPopupCloser" onClick={() => backFunc(setActive)}/>
                <div className="CartBuyPopupText">
                Большое спасибо за покупку! Мы ценим ваш выбор и надеемся, 
                что вы насладитесь своей новой книгой. Ваша поддержка помогает нам продолжать предлагать 
                лучшие книги для наших клиентов.
                </div>
                <div className="CartBuyPopupText">
                В ближайшее время с вами свяжеться служба поддержки для того чтобы подтвердить заказ.
                </div>
                <div className="CartBuyPopupText">
                Если у вас есть какие-либо вопросы или проблемы 
                с вашим заказом, не стесняйтесь связаться с нашей службой поддержки клиентов. Мы всегда готовы помочь.
                </div>
            </div>
        </div>
    )
}

export default CartBuyPopup;