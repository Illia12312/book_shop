import "./MySlider.css";
import leftArrow from "../../img/icons/left_arrow.png"
import rightArrow from "../../img/icons/right_arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
)};