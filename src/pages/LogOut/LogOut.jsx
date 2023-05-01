import "./LogOut.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {romoveUserAction} from "./../../redux-store/user/actions"
import { useState } from "react";
import photo from './photo.png';


const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backFunc = () => {
    dispatch(romoveUserAction());
    navigate("/");
  };

  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);

  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
      localStorage.setItem(email, JSON.stringify(imageURL));
    }
  };

  return (
    <div className="logOut">
      <form className="profileFoto">
        <div className="logOutGreeting">
        Здравствуйте {name}
        </div>
        <div className="logOutPhotoAndButtonHolder">
          <label htmlFor="profileFotoChanger" className="profileFotoChangerLabel">
            Загрузить файл
          </label>
          <input id="profileFotoChanger" type="file" onChange={(event) => handleOnChange(event)}/>
          <div className="profileImgHolder">
            <img src={imageURL ? imageURL : photo} 
            alt="здесь будет ваш автар"
            className="profileImg" />
          </div>
        </div>
      </form>
      <h3 className="logOutTitle">Xотите выйти из {email}?</h3>
      <button className="logOutButton" onClick={backFunc}>
        ВЫЙТИ
      </button>
    </div>
  );
};

export default LogOut;