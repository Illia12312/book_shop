import "./Header.css";
import logo from './../../img/logo.png';
import cart from './../../img/shopping-bag.png';
import search from './../../img/search.png';
import Button from '@mui/material/Button';


const Header = () =>{
    return(
        <div className="header">
            <div className="headerHolder">
                <div className="headerItems">
                    <img src={logo} alt="book shop" className="headerHolderImg"/>
                </div>
                <div className="headerItems headerItemsImgHolder">
                    <input type="text" placeholder="Найдите книгу..." className="headerHolderInput"/>
                    <img src={search} alt="search" className="headerHolderSearch"/>
                </div>
                <div className="headerItems headerItemsEnterHolder">
                    <Button variant="contained headerHolderEnterButton">Войти</Button>
                    <img src={cart} alt='cart' className="headerHolderCart"/>
                </div>
            </div>
        </div>
    )
}

export default Header;