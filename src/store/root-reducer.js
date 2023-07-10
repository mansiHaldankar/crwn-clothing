import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesMapReducer } from './categories/categories.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesMapReducer
});