import "../../Kid/Kid.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import { useState } from "react";
import _ from "lodash";
import DiscountCard from "../../../components/DiscountCard/DiscountCard";


const Fantasy = () =>{
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

    console.log(books);

    return(
        <div className="kidHolder">
          <h3 className="kidTitle">Фантастика</h3>
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
              if (item.type === "fantasy" &&  item.isDiscount === true ) {
                return <DiscountCard
                type = "simple"
                name={item.name}
                author={item.author}
                key={item.id}
                price={item.price}
                img={item.img}
                />;
              }
              else if (item.type === "fantasy" &&  item.isDiscount === false) {
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

export default Fantasy;