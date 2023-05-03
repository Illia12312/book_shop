import "./Kid.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useState } from "react";
import _ from "lodash";
import DiscountCard from "../../components/DiscountCard/DiscountCard";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';


function valuetext(value) {
  return `${value}°C`;
}

const Kid = () =>{
    const [item, setItem] = useState([]);
    const [value, setValue] = useState([60,345])
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const books = useSelector((state) => state.books.books)
    const booksType = books.filter((i) => i.type === "kid")

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

    useEffect(() => {
      console.log(value, booksType);
    }, value);

    return(
        <div className="kidHolder">
          <h3 className="kidTitle">Для Детей</h3>
          <Box sx={{ width: 180 }}>
            <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            max={345}
            min={60}
            color="secondary"
            />
          </Box>
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
            (item) =>
              item.type === "kid" &&  item.isDiscount === true && 
              <DiscountCard
              type = "simple"
              name={item.name}
              author={item.author}
              key={item.id}
              price={item.price}
              img={item.img}
              />
          )}
          {item.map(
            (item) =>
              item.type === "kid" &&  item.isDiscount === false && 
              <Card
              type = "simple"
                name={item.name}
                author={item.author}
                key={item.id}
                price={item.price}
                img={item.img}
              />
          )}
          </div>
        </div>
    )
}

export default Kid;