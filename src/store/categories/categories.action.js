import { createActions } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categoris.types";

export const setCategoriesMap = (categories) => createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories); 