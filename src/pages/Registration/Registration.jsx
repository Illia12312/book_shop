import "./Registration.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useState } from "react";

const Registration = () =>{
    const [active, setActive] = useState(false);

    return(
        <div className="registration">
            <div className="registrationWrap">
                <h3 className="registrationTitle">РЕГИСТРАЦИЯ</h3>
                <div className="registrationInputHolderBase">
                    <div className="registrationInputHolder">
                        <input type="text" placeholder="Введите ваше имя..." className="registrationInputName registrationInput" id="registrationInputEmail"/>
                    </div>
                    <div className="registrationInputHolder">
                        <input type="text" placeholder="Введите вашу фамилию..." className="registrationInputSurname registrationInput" id="registrationInputEmail"/>    
                    </div>
                    <div className="registrationInputHolder">
                        <input type="text" placeholder="Введите адрес эл. почты..." className="registrationInputEmail registrationInput" id="registrationInputEmail"/>  
                    </div>
                    <div className="registrationInputHolder">
                        <input type="text" placeholder="Введите пароль..." className="registrationInputPassword registrationInput" id="registrationInputPassword"/>
                    </div>                 
                </div>
                <div className="registrCheck">
                <label htmlFor="registrationCheck" className="registrationCheckHolder">
                    <Checkbox active={active} setActive={setActive}/>
                    Я соглашаюсь с <a href="#" className="registrationCheckboxLink">условиями</a>
                </label>
                </div>
                <button className={active ? "registrationButton" : "registrationButton disabled"}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
        </div>
    )
}

export default Registration;