import "./Card.css";

const Card = ({type, name, img, author, price}) => {
    return(
        <div className={`card ${type}`}>
            <div className="cardImgHolder">
                <img src={img} alt="img" className="cardImg" />
            </div>
            <div className="cardInfoHolder">
                <div className="cardName">{name}</div>
                <div className="cardAuthor">{author}</div>
                <div className="cardPrice">{price} грн.</div>
            </div>
            <button className="cardAddToCart">добавить в корзину</button>
        </div>
    )
}

export default Card;