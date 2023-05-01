import "./Registration.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUserAction } from "../../redux-store/user/actions";

const Registration = () =>{
    const [active, setActive] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const backFunc = () => navigate('/');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const handleClick = (email, password, name, surname) => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password, name, surname)
            .then((user) => {
            console.log(user);
            dispatch(setUserAction(
                email,
                user.uid,
                password,
                name,
                surname,
            ))
            backFunc();
            })
            .catch(console.error)
        }

    return(
        <div className="registration">
            <div className="registrationWrap">
                <h3 className="registrationTitle">РЕГИСТРАЦИЯ</h3>
                <div className="registrationInputHolderBase">
                    <div className="registrationInputHolder">
                        <input type="text" placeholder="Введите ваше имя..." 
                        value={name} onChange={(e) => setName(e.target.value)} 
                        className="registrationInputName registrationInput" id="registrationInputEmail"/>
                    </div>
                    <div className="registrationInputHolder">
                        <input type="text" 
                        placeholder="Введите вашу фамилию..." 
                        value={surname} onChange={(e) => setSurname(e.target.value)} 
                        className="registrationInputSurname registrationInput" id="registrationInputEmail"/>    
                    </div>
                    <div className="registrationInputHolder">
                        <input type="text" placeholder="Введите адрес эл. почты..." 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        className="registrationInputEmail registrationInput" id="registrationInputEmail"/>  
                    </div>
                    <div className="registrationInputHolder">
                        <input type="password" placeholder="Введите пароль..." 
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        className="registrationInputPassword registrationInput" id="registrationInputPassword"/>
                    </div>                 
                </div>
                <div className="registrCheck">
                <label htmlFor="registrationCheck" className="registrationCheckHolder">
                    <Checkbox active={active} setActive={setActive}/>
                    Я соглашаюсь с <Link to="/conditions" className="registrationCheckboxLink">условиями</Link>
                </label>
                </div>
                {active ? <button  className="registrationButton" 
                onClick={() => handleClick(email, password, name, surname)}>ЗАРЕГИСТРИРОВАТЬСЯ</button> :
                <button  className="registrationButton disabled" disabled>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                }
            </div>
        </div>
    )
}

export default Registration;