import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesMapReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesMapReducer,
  cart: cartReducer,
});
