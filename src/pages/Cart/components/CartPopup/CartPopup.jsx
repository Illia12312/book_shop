import "./CartPopup.css";
import closer from "../../../../img/icons/closer.svg";
import { useState } from "react";
import CartBuyPopup from "./CartBuyPopup";
import { resetCartAction } from "../../../../redux-store/cart/actions";
import { useSelector, useDispatch } from 'react-redux';

const CartPopup = ({active, setActive}) =>{
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [CVV, setCVV] = useState('');
    const [activePopup, setActivePopup] = useState(false);
    const closeFunc = (setActivePopup) =>{
        dispatch(resetCartAction());
        setActivePopup(true);
    }

    return(
        <div className={active ? "CartPopup active" : "CartPopup"} onClick={() => setActive(false)}>
            <div className={active ? "CartPopupContent active" : "CartPopupContent"} onClick={e => e.stopPropagation()}>
                <img src={closer} alt="click" className="CartPopupCloser" onClick={() => setActive(false)}/>
                <h3 className="CartPopupTitle">ОФОРМЛЕНИЕ ЗАКАЗА</h3>
                <div className="cartNameAndSurnameHolder">
                    <input type="text" placeholder="Введите имя..." 
                    className="CartNameInput cartInputClassic" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Введите фамилию..." 
                    className="cartSurnameInput cartInputClassic" 
                    value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div className="cartNumberHolder">
                    <input type="text" maxlength="13" 
                    placeholder="Введите номер телефона..." 
                    className="cartNumberInput cartInputClassic" 
                    value={number} onChange={(e) => setNumber(e.target.value)} />
                    <input type="text" maxlength="16" 
                    placeholder="Введите номер карты..." 
                    className="cartCardNumberInput cartInputClassic" 
                    value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div className="cartDataHolder">
                    <input type="datetime" maxlength="5" 
                    placeholder="Введите дату окончания карты..." 
                    className="cartDateInput cartInputClassic" 
                    value={date} onChange={(e) => setDate(e.target.value)}/>
                    <input type="password" maxlength="3" 
                    placeholder="Введите CVV..." 
                    className="cartCVVInput cartInputClassic" 
                    value={CVV} onChange={(e) => setCVV(e.target.value)}/>
                </div>
                <div className="cartCardNumberHolder">
                </div>
                {name !== '' && surname !== '' && number.length > 11 && cardNumber.length > 15 && date.length > 4 
                && CVV.length > 2 ? <button className="CartPopupButton" onClick={() => closeFunc(setActivePopup)}>КУПИТЬ</button> :
                <button className="CartPopupButton" onClick={() => alert("Введенные данные некоректны")}>КУПИТЬ</button>}
            </div>
            <CartBuyPopup activePopup={activePopup} setActivePopup={setActivePopup} setActive={setActive}/>
        </div>
    )
}

export default CartPopup;