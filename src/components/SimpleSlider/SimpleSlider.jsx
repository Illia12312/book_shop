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
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
            <Card type="slider"/>
        </Slider>
      </div>
    );
  }
}