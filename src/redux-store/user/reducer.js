import {
    SET_USER,
    REMOVE_USER,
  } from "./constants";
  
  const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    surname: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        return{
          ...state,
          email: action.payload.email,
          token: action.payload.token,
          id: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
        };
        case REMOVE_USER:
        return{
          ...state,
          email: null,
          token: null,
          id: null,
          name: null,
          surname: null,
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;