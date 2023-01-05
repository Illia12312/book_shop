import "../../Kid/Kid.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import { useState } from "react";
import _ from "lodash";
import DiscountCard from "../../../components/DiscountCard/DiscountCard";


const History = () =>{
    const [item, setItem] = useState([]);

    const books = useSelector((state) => state.books.books)

    useEffect(() => {
        setItem(books);
    }, [])
    
    const funcSort = (value) =>{
    if(value === 'all'){
        setItem(books);
    }
    else if(value === 'asc'){
        setItem(_.orderBy(books, ['price'], ['asc']));
    }
    else if(value === 'desc'){
        setItem(_.orderBy(books, ['price'], ['desc']));
    }
    }

    return(
        <div className="kidHolder">
          <h3 className="kidTitle">История</h3>
          <div className="kid">
          <select
          name="select"
          id="manSelect"
          className="manSelect"
          onChange={(e) => funcSort(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="asc">Цена по возрастанию</option>
          <option value="desc">Цена по убыванию</option>
        </select>
        {item.map(
            (item) => {
              if (item.type === "history" &&  item.isDiscount === true ) {
                return <DiscountCard
                type = "simple"
                name={item.name}
                author={item.author}
                key={item.id}
                price={item.price}
                img={item.img}
                />;
              }
              else if (item.type === "history" &&  item.isDiscount === false) {
                return <Card
                   type = "simple"
                   name={item.name}
                   author={item.author}
                   key={item.id}
                   price={item.price}
                   img={item.img}
                   />
              }
            }
           )}
          </div>
        </div>
    )
}

export default History;