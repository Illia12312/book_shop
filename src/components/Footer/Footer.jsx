import "./Footer.css";
import instagram from './../../img/instagram.png';
import telegram from './../../img/telegram.png';
import tiktok from './../../img/tiktok.png';
import facebook from './../../img/facebook.png';
import location from './../../img/location.png';

const Footer = () =>{
    return(
     <div className="footer">
        <div className="footerHolder">
            <div className="footerItem">
                <h3 className="footerItemTitle">КОНТАКТЫ</h3>
                <a href="tel: +74951234567" className="footerLink">+380999999999</a>
                <a href="mailto: ilya3677164@gmail.com" className="footerLink">ilya3677164@gmail.com</a>
                <div className="locationAndLinkHolder">
                    <img src={location} alt="location" className="footerItemLocationImg" />
                    <a href="#" className="footerLink footerLinkLocationFooter">st. Tornado, 2, block 4</a>
                </div>
            </div>
            <div className="footerItem">
                <h3 className="footerItemTitle">ПОМОЩЬ</h3>
                <a href='#' className="footerLink">Доставка</a>
                <a href='#' className="footerLink">Оплата</a>
                <a href="#" className="footerLink">Возврат</a>
            </div>
            <div className="footerItem">
                <h3 className="footerItemTitle">НАШИ СОЦИАЛЬНЫЕ СЕТИ</h3>
                <img src={instagram} alt="instagram" className="footerItemIcons"/>
                <img src={telegram} alt="telegram" className="footerItemIcons"/>
                <img src={facebook} alt="facebook" className="footerItemIcons"/>
                <img src={tiktok} alt="tiktok" className="footerItemIcons"/>
            </div>
        </div>
     </div>   
    )
}

export default Footer;