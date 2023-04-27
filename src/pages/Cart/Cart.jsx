import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import Product from './components/Product';
import { setCartCountACtion, setCartPriceACtion } from '../../redux-store/cart/actions';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  

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
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Cart;