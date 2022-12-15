import "./NewModels.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import DiscountCard from "../DiscountCard/DiscountCard";

const NewModels = () =>{
    const [item, setItem] = useState([]);
    const books = useSelector((state) => state.books.books);

    useEffect(() => {
        setItem(books.slice(0,10))
    }, [])

    return(
        <div className="newModels">
            <h3 className="newModelsBookShop">Book Shop</h3>
            <h3 className="newModelsTitle">Новые Поступления</h3>
            <div className="newModelsItems">
            {item.map(
            (item) =>(
                item.isDiscount ? 
                <DiscountCard
                type = "simple"
                name={item.name}
                author={item.author}
                key={item.id}
                price={item.price}
                img={item.img}
                />
                :
                <Card
                type = "simple"
                  name={item.name}
                  author={item.author}
                  key={item.id}
                  price={item.price}
                  img={item.img}
                />
              )
          )}
            </div>
            <button className="newModelsButton">ПОКАЗАТЬ ЕЩЁ</button>
        </div>
    )
}

export default NewModels;