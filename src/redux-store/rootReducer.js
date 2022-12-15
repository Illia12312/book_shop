import { combineReducers } from "redux";

import entityReducer from "./entity/reducer";
import booksReducer from "./books/reducer"

const rootReducer = combineReducers({
    entity: entityReducer,
    books: booksReducer,
});

export default rootReducer;