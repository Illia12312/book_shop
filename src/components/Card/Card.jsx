import "./Card.css";
import img from "../../img/card-example.jpeg";

const Card = ({type}) => {
    return(
        <div className={`card ${type}`}>
            <div className="cardImgHolder">
                <img src={img} alt="img" className="cardImg" />
            </div>
            <div className="cardInfoHolder">
                <div className="cardName">Старик и море</div>
                <div className="cardAuthor">Эрнест Хемингуэй</div>
                <div className="cardPrice">200 грн.</div>
            </div>
            <button className="cardAddToCart">добавить в корзину</button>
        </div>
    )
}

export default Card;