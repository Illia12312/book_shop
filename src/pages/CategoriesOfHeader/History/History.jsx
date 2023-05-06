import "../../Kid/Kid.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";
import { useState } from "react";
import _ from "lodash";
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useMinMax } from "../../../hooks/useMinMax";

function valuetext(value) {
  return `${value}°C`;
}

const History = () =>{
  const [item, setItem] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const books = useSelector((state) => state.books.books)
  const booksType = books.filter((i) => i.type === "history");
  const {min, max} = useMinMax(booksType);
  const [value, setValue] = useState([min, max])

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
    console.log(min, max);
  }, value);

  return(
      <div className="kidHolder">
        <h3 className="kidTitle">История</h3>
        <Box sx={{ width: 180 }} className="kidBox"> 
          <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          max={max}
          min={min}
          color="secondary"
          />
          <span className="kidBoxTitle">сортировка по цене</span>
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
            (item) => {
              if (item.type === "history" &&  item.isDiscount === true && value[0] <= item.price && value[1] >= item.price) {
                return <DiscountCard
                type = "simple"
                name={item.name}
                author={item.author}
                key={item.id}
                price={item.price}
                img={item.img}
                year={item.year}
                format={item.format}
                edition={item.edition}
                aboutIt={item.aboutIt}
                />;
              }
              else if (item.type === "history" &&  item.isDiscount === false && value[0] <= item.price && value[1] >= item.price) {
                return <Card
                   type = "simple"
                   name={item.name}
                   author={item.author}
                   key={item.id}
                   price={item.price}
                   img={item.img}
                   year={item.year}
                   format={item.format}
                   edition={item.edition}
                   aboutIt={item.aboutIt}
                   />
              }
            }
           )}
        </div>
      </div>
  )
}

export default History;