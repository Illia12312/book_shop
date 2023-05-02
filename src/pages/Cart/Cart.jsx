import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import Product from './components/Product';
import { setCartCountACtion, setCartPriceACtion } from '../../redux-store/cart/actions';
import {Link} from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";
import Button from '@mui/material/Button';
import CartPopup from './components/CartPopup/CartPopup';

function Cart() {
  const [active, setActive] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { isAuth, email, token, name, surname } = useAuth();
  

  if(cart.length !== 0){
    dispatch(setCartCountACtion());
    dispatch(setCartPriceACtion());
  }

  const count = useSelector((state) => state.cart.cartCount)
  const price = useSelector((state) => state.cart.cartPrice)
  console.log(count);
  console.log(cart);

  return (
    <div className="cartWrapper">
      <header className="sectionCartHeader">
        <div className="container">              
          <h1 className="mainTitle">Корзина товаров</h1>
        </div>
      </header>
      <div className="sectionCartBody">
        <div className="container">
          <header className="cartHeader">
            <div className="cartHeaderTitle">наименование</div>
            <div className="cartHeaderCount">количество</div>
            <div className="cartHeaderCost">стоимость</div>
          </header>
          
          {cart.length === 0 ? <div className='emptyCart'>НИЧЕГО НЕТ</div> : cart.map((i) => (
            <Product name={i.name} price={i.price} count={i.count} key={i.img} img={i.img} author={i.author}/>
          ))}

          <footer className="cartFooter">
            <div className="cartFooterCount">{cart.length !== 0 ? count : 0} шт.</div>
            <div className="cartFooterPrice">{cart.length !== 0 ? price : 0} грн.</div>
            {isAuth && cart.length !== 0 ? <Button variant="contained headerHolderEnterButton CartHolderEnterButton" onClick={() => setActive(true)}>Купить</Button>:
            <Button variant="contained headerHolderEnterButton CartHolderEnterButton" disabled>Купить</Button>}
          </footer>
        </div>
      </div>
      <CartPopup active={active} setActive={setActive}/>
    </div>
  );
}

export default Cart;