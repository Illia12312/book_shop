import "./SimpleSlider.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from "../Card/Card";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:"#CCC", paddingBottom: "20px", borderRadius: "10px", marginRight: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 5px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:"#CCC", paddingBottom: "20px", borderRadius: "10px", marginLeft: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 5px"}}
      onClick={onClick}
    />
  );
}


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="singleSlider">
        <div className="singleSliderRec">Рекомендуем</div>
        <Slider {...settings}>
            <Card 
              type="slider"
              name="Портрет Дориана Грея"
              author="Оскар Уайлд"
              key='20'
              price='88'
              img="https://live.staticflickr.com/65535/52562950602_5ebd23893d_m.jpg"
            />
            <Card 
              type="slider"
              name="451 градус по Фарингейту"
              author="Рэй Брэдбери"
              key='21'
              price='68'
              img="https://live.staticflickr.com/65535/52562950757_7c124a2570_m.jpg"
            />
            <Card 
              type="slider"
              name="Замок"
              author="Франц Кафка"
              key='22'
              price='287'
              img="https://live.staticflickr.com/65535/52563689684_1d68238f75_m.jpg"
            />
            <Card 
              type="slider"
              name="Счастливчики"
              author="Даниэла Стил"
              key='23'
              price='293'
              img="https://live.staticflickr.com/65535/52563689644_f968b134e7_m.jpg"
            />
            <Card 
              type="slider"
              name="Безмолвный король"
              author="Амо Джонс"
              key='24'
              price='143'
              img="https://live.staticflickr.com/65535/52563689634_b37fe96fc4_m.jpg"
            />
            <Card 
              type="slider"
              name="Греко-турецкая война"
              author="Кольмар фон дер Гольц"
              key='25'
              price='189'
              img="https://live.staticflickr.com/65535/52563407036_4f9cc4ddc6_m.jpg"
            />
            <Card 
              type="slider"
              name="Византийская культура"
              author="А. Каждан"
              key='26'
              price='94'
              img="https://live.staticflickr.com/65535/52563868230_95c4e24a93_m.jpg"
            />
            <Card 
              type="slider"
              name="Выдох"
              author="Тед Чан"
              key='27'
              price='182'
              img="https://live.staticflickr.com/65535/52562950807_4c3aabd9f6_m.jpg"
            />
            <Card 
              type="slider"
              name="Половина солнца"
              author="Ад Вороновский"
              key='28'
              price='157'
              img="https://live.staticflickr.com/65535/52562950812_96bb37bd5e_m.jpg"
            />
            <Card 
              type="slider"
              name="Зодиак"
              author="Роберт Грейсмит"
              key='29'
              price='206'
              img="https://live.staticflickr.com/65535/52563868505_b4800a684d_m.jpg"
            />
            <Card 
              type="slider"
              name="Морской волк"
              author="Джек Лондон"
              key='30'
              price='329'
              img="https://live.staticflickr.com/65535/52563868155_08189aa9b6_m.jpg"
            />
        </Slider>
      </div>
    );
  }
}