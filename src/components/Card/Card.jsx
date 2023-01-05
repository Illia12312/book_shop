import { useState } from "react";
import "./Card.css";
import CardPopup from "../CardPopup/CardPopup";

const Card = ({type, name, img, author, price}) => {
    const [active, setActive] = useState(false);

    return(
        <div className={`card ${type}`} onClick={() => setActive(true)}>
            <div className="cardImgHolder">
                <img src={img} alt="img" className="cardImg" />
            </div>
            <div className="cardInfoHolder">
                <div className="cardName">{name}</div>
                <div className="cardAuthor">{author}</div>
                <div className="cardPrice">{price} грн.</div>
            </div>
            <button className="cardAddToCart">добавить в корзину</button>
            <CardPopup active={active} setActive={setActive}/>
        </div>
    )
}

export default Card;