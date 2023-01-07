import { SET_CART, SET_CART_PRICE, REMOVE_CART, RESET_CART, SET_CART_COUNT } from "./constants";

export const setCartAction = (name, price, author, count, img) => ({
    type: SET_CART,
    payload:{
        name, 
        price, 
        author, 
        count,
        img
    }
  });

export const setCartPriceACtion = () => (
    {
        type: SET_CART_PRICE,
     }
)

export const setCartCountACtion = () => (
    {
        type: SET_CART_COUNT,
     }
)

export const removeCartAction = (img) =>({
    type: REMOVE_CART,
    payload:{
        img,
    }
})

export const resetCartAction = (cart) => ({
    type: RESET_CART,
    payload:{
        cart,
    }
})