import firstSlider from "../../img/sliderImg/slider-1.jpg";
import secondSlider from "../../img/sliderImg/slider-2.jpg";
import thirdSlider from "../../img/sliderImg/slider-3.jpg";
import fourthSlider from "../../img/sliderImg/slider-4.jpg";
import fifthSlider from "../../img/sliderImg/slider-5.jpg";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './MySlider.css';

const MySlider = () =>{
    return (
    <AwesomeSlider className="sliderHolder">
      <div className="sliderImgHolder">
        <img src={firstSlider} alt="firstSlider" className="sliderImg"/>
      </div>
      <div className="sliderImgHolder">
        <img src={secondSlider} alt="firstSlider" className="sliderImg"/>
      </div>
      <div className="sliderImgHolder">
        <img src={thirdSlider} alt="firstSlider" className="sliderImg"/>
      </div>
      <div className="sliderImgHolder">
        <img src={fourthSlider} alt="firstSlider" className="sliderImg"/>
      </div>
      <div className="sliderImgHolder">
        <img src={fifthSlider} alt="firstSlider" className="sliderImg"/>
      </div>
    </AwesomeSlider>
);
}

export default MySlider;