import "./DiscountCard.css";
import "../Card/Card.css";

const DiscountCard = ({type, img, name, author, price}) =>{
    const fakePrice = Math.round(price / 5 + price);

    return(
            <div className={`card ${type}`}>
            <div className="cardImgHolder">
                <img src={img} alt="img" className="cardImg" />
            </div>
            <div className="cardInfoHolder">
                <div className="cardName">{name}</div>
                <div className="cardAuthor">{author}</div>
                <div className="cardPrice">{price} грн. <strike className="cardFalsePrice">{fakePrice} грн.</strike></div>
            </div>
            <button className="cardAddToCart">добавить в корзину</button>
        </div>
    )
}

export default DiscountCard;