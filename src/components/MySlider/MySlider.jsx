// import firstSlider from "../../img/sliderImg/slider-1.jpg";
// import secondSlider from "../../img/sliderImg/slider-2.jpg";
// import thirdSlider from "../../img/sliderImg/slider-3.jpg";
// import fourthSlider from "../../img/sliderImg/slider-4.jpg";
// import fifthSlider from "../../img/sliderImg/slider-5.jpg";
import './MySlider.css';
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import { useState } from 'react';

const MySlider = () =>{
    const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/slider_img/slider_${index}.jpg`}
              id={`sliderImages${index}`}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} key={"1"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} key={"2"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MySlider;