// import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { createActions } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categoris.types";

export const setCategoriesMap = (categories) =>
  createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
  createActions(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createActions(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailuare = (error) =>
  createActions(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);

// export const fetchCategories = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categories = await getCategoriesAndDocument();
//       dispatch(fetchCategoriesSuccess(categories));
//     } catch (error) {
//       dispatch(fetchCategoriesFailuare(error));
//     }
//   };
// };
