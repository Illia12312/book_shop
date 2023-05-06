import "./CardPopup.css";
import closer from "../../img/icons/closer.svg"
import { useState } from "react";
import { setCartAction } from "../../redux-store/cart/actions";
import { useDispatch, useSelector } from "react-redux";

const CardPopup = ({active, setActive, name, author, img, price, year, format, edition, aboutIt}) =>{
    const [count, setCount] = useState(1);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const cartFunc = (name, price, author, count, img) =>{
        dispatch(setCartAction(name, price, author, count, img));
    }

    const activeFunc = (open, setOpen) => {
        open ? setOpen(false) : setOpen(true);
      }

    return(
        <div className={active ? "cardPopup active" : "cardPopup"}>
            <div className="cardPopupContent" onClick={e => e.stopPropagation()}>
                <img src={closer} className="cardPopupCloser" alt="click" onClick={() => setActive(false)}></img>
                <div className="cardPopupImgHolder">
                    <img src={img} alt="img" className="cardPopupImg" />
                </div>
                <div className="cardPopupContentHolder">
                    <div className="cardPopupInfoHolder">
                        <div className="cardPopupName">{name}</div>
                        <div className="cardPopupAuthor">{author}</div>
                        <div className="cardPopupPrice">{price} грн.</div>
                        <div className="cardPopupAdd">Год издания: {year} </div>
                        <div className="cardPopupAdd">Формат: {format} </div>
                        <div className="cardPopupAdd">Издательство: {edition}</div>
                        <div className="cardPopupAdd cardPopupAddLast">О книге: {aboutIt}</div>
                    </div>
                    <div className="cardPopupButtonHolder">
                        <button className="cardPopupCartButton" onClick={() => cartFunc(name, price, author, count, img)}>ДОБАВИТЬ В КОРЗИНУ</button>
                        <button className="cardPopupCountButton" onClick={() => activeFunc(open, setOpen)}>КОЛИЧЕСТВО  {`(${count})`}</button>
                        <div className={open ? "cardPopupCountHolder open" : "cardPopupCountHolder"}>
                            <div className="cardPopupCount" onClick={() => setCount(1)}>1</div>
                            <div className="cardPopupCount" onClick={() => setCount(2)}>2</div>
                            <div className="cardPopupCount" onClick={() => setCount(3)}>3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPopup;