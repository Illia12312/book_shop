import { combineReducers } from "redux";

import entityReducer from "./entity/reducer";
import booksReducer from "./books/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
    entity: entityReducer,
    books: booksReducer,
    cart: cartReducer, 
});

export default rootReducer;