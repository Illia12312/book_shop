import "./Header.css";
import {Link} from "react-router-dom";
import logo from './../../img/logo.png';
import cart from './../../img/icons/shopping-bag.png';
import search from './../../img/icons/search.png';
import Button from '@mui/material/Button';
import { useState } from "react";
import LoginPopup from "./LoginPopup/LoginPopup";
import { useLookinFor } from "../../hooks/useSearch";
import SearchItem from "../SearchItem/SearchItem";


const Header = () =>{
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');
    let {response} = useLookinFor(value);

    return(
        <div className="header">
            <div className="headerHolder">
                <div className="headerItems">
                    <Link to="/"><img src={logo} alt="book shop" className="headerHolderImg"/></Link>
                </div>
                <div className="headerItems headerItemsImgHolder">
                    <input type="text" placeholder="Найдите книгу..." 
                    className="headerHolderInput"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
                    {value !== "" && response.length === 0 &&
                        <div className="emptySearch">
                            НИЧЕГО НЕ НАЙДЕНО
                        </div>
                    }
                    {
                        response.length !== 0 &&
                        <div className="fullSearch">
                            {response.map((i) => (
                                <SearchItem name={i[0]} img={i[2]} key={i[0]+i[1]} price={i[1]} author={i[3]}/>
                            ))}
                        </div>
                    }
                    <img src={search} alt="search" className="headerHolderSearch"/>
                </div>



                <div className="headerItems headerItemsEnterHolder">
                    {/* <Button variant="contained headerHolderEnterButton" onClick={() => setActive(true)}>Войти</Button> */}
                    <Link to="/cart"><img src={cart} alt='cart' className="headerHolderCart"/></Link>
                </div>
            </div>
            <div className="headerCategories">
                <nav className="headerListHolder">КАТЕГОРИИ
                    <ul className="headerList">
                        <Link to="/fantasy" className="transferLink"><li className="headerCategoriesListItem">Фантастика</li></Link>
                        <Link to="/novel" className="transferLink"><li className="headerCategoriesListItem">Романы</li></Link>
                        <Link to="/thriller" className="transferLink"><li className="headerCategoriesListItem">Триллеры</li></Link>
                        <Link to="/history" className="transferLink"><li className="headerCategoriesListItem">История</li></Link>
                        <Link to="/science" className="transferLink"><li className="headerCategoriesListItem">Научные книги</li></Link>
                    </ul>
                </nav>
                <Link to="/audio" className="transferLink"><div className="headerCategoriesItem">АУДОКНИГИ</div></Link>
                <Link to="/kid" className="transferLink"><div className="headerCategoriesItem">ДЛЯ ДЕТЕЙ</div></Link>
                <Link to="/discount" className="transferLink"><div className="headerCategoriesItem">СКИДКИ</div></Link>
                <Link to="/popular" className="transferLink"><div className="headerCategoriesItem">ПОПУЛЯРНЫЕ</div></Link>
            </div>
            {/* <LoginPopup active={active} setActive={setActive} /> */}
        </div>
    )
}

export default Header;