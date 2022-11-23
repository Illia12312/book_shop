import "./LoginPopup.css";
import closer from "../../../img/icons/closer.svg";

const LoginPopup = ({active, setActive}) =>{
    return(
        <div className={active ? "loginPopup active" : "loginPopup"} onClick={() => setActive(false)}>
            <div className={active ? "loginPopupContent active" : "loginPopupContent"} onClick={e => e.stopPropagation()}>
                <img src={closer} alt="click" className="loginPopupCloser" onClick={() => setActive(false)}/>
                <h3 className="loginPopupTitle">Вход в аккаунт</h3>
                <div className="loginPopupInputHolder">
                    <label htmlFor="loginPopupInputEmail" className="InputHolderLabel">
                        Електронная почта <br/>
                        <input type="text" placeholder="Введите адрес эл. почты..." className="loginPopupInputEmail loginPopupInput" id="loginPopupInputEmail"/>
                    </label>
                    <div className="loginPopupPasswordForgotten">Забыли пароль?</div>
                    <label htmlFor="loginPopupInputPassword" className="InputHolderLabel">
                        Пароль <br/>
                        <input type="text" placeholder="Введите пароль..." className="loginPopupInputPassword loginPopupInput" id="loginPopupInputPassword"/>
                    </label>
                </div>
                <button className="loginPopupButton">ВОЙТИ</button>
                <div className="loginPopupRegistrationHolder">
                    <a href="/registration" className="loginPopupRegistration">ЗАРЕГИСТРИРОВАТЬСЯ</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPopup;