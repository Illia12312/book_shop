import {
    SET_CART,
    REMOVE_CART,
    RESET_CART,
    SET_CART_COUNT,
    SET_CART_PRICE,
  } from "./constants";
  
const initialState = {
  cart: [],
  cartCount: 0,
  cartPrice: 0,
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return {
          ...state,
          cart: [...state.cart, {
            name: action.payload.name,
            price: action.payload.price,
            author: action.payload.author,
            count: action.payload.count,
            img: action.payload.img,
          }],
        };
        case REMOVE_CART:
          return{
            ...state,
            cart: state.cart.filter((item) => item.img !== action.payload.img)
          }
          case RESET_CART:
          return{
            ...state,
            cart: [],
          }
        case SET_CART_COUNT:
          return{
            ...state,
            cartCount: state.cart.reduce((acc, curr) => acc + curr.count, 0)
          }
        case SET_CART_PRICE:
          return{
            ...state,
            cartPrice: state.cart.reduce((acc, curr) => acc + Number(curr.price)*Number(curr.count), 0)
          }
      default:
        return { ...state };
    }
  };
  
  export default reducer;