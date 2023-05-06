import "./LoginPopup.css";
import closer from "../../../img/icons/closer.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserAction } from "../../../redux-store/user/actions";
import { Link } from "react-router-dom";


const LoginPopup = ({active, setActive}) =>{
    const backFunc = () => setActive(false);

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleClick = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password, name)
        .then(({user}) => {
            dispatch(setUserAction(
              email,
              user.accessToken,
              user.uid,
              name
            ))
            backFunc();})
        .catch(console.log("fail"));
    }

    return(
        <div className={active ? "loginPopup active" : "loginPopup"} onClick={() => setActive(false)}>
            <div className={active ? "loginPopupContent active" : "loginPopupContent"} onClick={e => e.stopPropagation()}>
                <img src={closer} alt="click" className="loginPopupCloser" onClick={() => setActive(false)}/>
                <h3 className="loginPopupTitle">Вход в аккаунт</h3>
                <div className="loginPopupInputHolder">
                    <label htmlFor="loginPopupInputEmail" className="InputHolderLabel">
                        <br/>
                        <input type="text" placeholder="Введите адрес эл. почты..." 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        className="loginPopupInputEmail loginPopupInput" id="loginPopupInputEmail"/>
                    </label>
                    <label htmlFor="loginPopupInputName" className="InputHolderLabel">
                        <br/>
                        <input type="text" placeholder="Введите имя..." 
                        value={name} onChange={(e) => setName(e.target.value)} 
                        className="loginPopupInputName loginPopupInput" id="loginPopupInputName"/>
                    </label>
                    <label htmlFor="loginPopupInputPassword" className="InputHolderLabel">
                        <br/>
                        <input type="password" placeholder="Введите пароль..." 
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        className="loginPopupInputPassword loginPopupInput" id="loginPopupInputPassword"/>
                    </label>
                </div>
                <button className="loginPopupButton" onClick={() => handleClick(email, password, name)}>ВОЙТИ</button>
                <div className="loginPopupRegistrationHolder">
                    <Link to="/registration" onClick={() => setActive(false)} 
                    className="loginPopupRegistration">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPopup;