import "./Header.css";
import {Link} from "react-router-dom";
import logo from './../../img/logo.png';
import cart from './../../img/icons/shopping-bag.png';
import search from './../../img/icons/search.png';
import Button from '@mui/material/Button';
import { useState } from "react";
import LoginPopup from "./LoginPopup/LoginPopup";


const Header = () =>{
    const [active, setActive] = useState(false);

    return(
        <div className="header">
            <div className="headerHolder">
                <div className="headerItems">
                    <Link to="/"><img src={logo} alt="book shop" className="headerHolderImg"/></Link>
                </div>
                <div className="headerItems headerItemsImgHolder">
                    <input type="text" placeholder="Найдите книгу..." className="headerHolderInput"/>
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
                        <li className="headerCategoriesListItem">Фантастика</li>
                        <li className="headerCategoriesListItem">Романы</li>
                        <li className="headerCategoriesListItem">Триллеры</li>
                        <li className="headerCategoriesListItem">История</li>
                        <li className="headerCategoriesListItem">Научные книги</li>
                    </ul>
                </nav>
                <Link to="/audio" className="transferLink"><div className="headerCategoriesItem">АУДОКНИГИ</div></Link>
                <Link to="/kid" className="transferLink"><div className="headerCategoriesItem">ДЛЯ ДЕТЕЙ</div></Link>
                <Link to="/discount" className="transferLink"><div className="headerCategoriesItem">СКИДКИ</div></Link>
                <Link to="/popular" className="transferLink"><div className="headerCategoriesItem">ПОПУЛЯРНЫЕ</div></Link>
            </div>
            <LoginPopup active={active} setActive={setActive} />
        </div>
    )
}

export default Header;