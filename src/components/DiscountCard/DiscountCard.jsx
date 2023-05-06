import "./DiscountCard.css";
import "../Card/Card.css";
import CardPopup from "../CardPopup/CardPopup";
import { useState } from "react";
import { setCartAction } from "../../redux-store/cart/actions";
import { useDispatch, useSelector } from "react-redux";

const DiscountCard = ({type, img, name, author, price, year, format, edition, aboutIt}) =>{
    const fakePrice = Math.round(price / 5 + price);
    const [active, setActive] = useState(false)

    const dispatch = useDispatch();

    const cartFunc = (name, price, author, count, img) =>{
        dispatch(setCartAction(name, price, author, count, img));
    }

    return(
        <div className="discountCard" onClick={() => setActive(true)}>
                        <div className={`card ${type}`}>
            <div className="cardImgHolder">
                <img src={img} alt="img" className="cardImg" />
            </div>
            <div className="cardInfoHolder">
                <div className="cardName">{name}</div>
                <div className="cardAuthor">{author}</div>
                <div className="cardPrice">{price} грн. <strike className="cardFalsePrice">{fakePrice} грн.</strike></div>
            </div>
            <button className="cardAddToCart" onClick={(e) => {cartFunc(name, price, author, 1  , img); e.stopPropagation()}}>добавить в корзину</button>
        </div>
        <CardPopup active={active} setActive={setActive} name={name} img={img} author={author} price={price}
        year={year} format={format} edition={edition} aboutIt={aboutIt}/>
        </div>
    )
}

export default DiscountCard;