import "./Header.css";
import {Link} from "react-router-dom";
import logo from './../../img/logo.png';
import cart from './../../img/icons/shopping-bag.png';
import search from './../../img/icons/search.png';
import Button from '@mui/material/Button';


const Header = () =>{
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
                    <Button variant="contained headerHolderEnterButton">Войти</Button>
                    <Link to="/cart"><img src={cart} alt='cart' className="headerHolderCart"/></Link>
                </div>
            </div>
            <div className="headerCategories">
                <div className="headerCategoriesItem">КАТЕГОРИИ</div>
                <div className="headerCategoriesItem">АУДОКНИГИ</div>
                <div className="headerCategoriesItem">ДЛЯ ДЕТЕЙ</div>
                <div className="headerCategoriesItem">СКИДКИ</div>
                <div className="headerCategoriesItem">ПОПУЛЯРНЫЕ</div>
            </div>
        </div>
    )
}

export default Header;