import "./Footer.css";
import instagram from './../../img/instagram.png';
import telegram from './../../img/telegram.png';
import tiktok from './../../img/tiktok.png';
import facebook from './../../img/facebook.png';
import location from './../../img/location.png';
import {Link} from "react-router-dom";

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
                    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D1%83%D0%BC%D1%81%D0%BA%D0%B0%D1%8F,
                    +%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F
                    +%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+61000/@50.0120357,36.24
                    05313,17z/data=!3m1!4b1!4m6!3m5!1s0x4127a0dbd3432627:0x5050954abba7d85e!8m2!3d50.0120357!4d36.24272!16s%2Fm
                    %2F0ngtkns" target="_blank" className="footerLink footerLinkLocationFooter">st. Tornado, 2</a>
                </div>
            </div>
            <div className="footerItem">
                <h3 className="footerItemTitle">ПОМОЩЬ</h3>
                <Link to='/delivery' className="footerLink">Доставка</Link>
                <Link to='/payment' className="footerLink">Оплата</Link>
                <Link to="/return" className="footerLink">Возврат</Link>
            </div>
            <div className="footerItem footerItemTikTok">
                <h3 className="footerItemTitle">НАШИ СОЦИАЛЬНЫЕ СЕТИ</h3>
                <img src={instagram} alt="instagram" className="footerItemIcons"/>
                <img src={telegram} alt="telegram" className="footerItemIcons"/>
                <img src={facebook} alt="facebook" className="footerItemIcons"/>
            </div>
        </div>
     </div>   
    )
}

export default Footer;