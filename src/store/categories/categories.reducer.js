import { CATEGORIES_ACTION_TYPES } from "./categoris.types";

const INITIAL_STATE = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const categoriesMapReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE0:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
