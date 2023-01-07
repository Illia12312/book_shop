import { useState } from "react";
import "./Card.css";
import CardPopup from "../CardPopup/CardPopup";
import { setCartAction } from "../../redux-store/cart/actions";
import { useDispatch, useSelector } from "react-redux";

const Card = ({type, name, img, author, price}) => {
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const cartFunc = (name, price, author, count, img) =>{
        dispatch(setCartAction(name, price, author, count, img));
    }


    return(
        <div className={`card ${type}`} onClick={() => type !== "slider" && setActive(true)}>
            <div className="cardImgHolder">
                <img src={img} alt="img" className="cardImg" />
            </div>
            <div className="cardInfoHolder">
                <div className="cardName">{name}</div>
                <div className="cardAuthor">{author}</div>
                <div className="cardPrice">{price} грн.</div>
            </div>
            <button className="cardAddToCart" onClick={(e) => {cartFunc(name, price, author, 1  , img); e.stopPropagation()}}>добавить в корзину</button>
            <CardPopup active={active} setActive={setActive} name={name} img={img} author={author} price={price}/>
        </div>
    )
}

export default Card;