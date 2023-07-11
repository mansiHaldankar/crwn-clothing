import { createSelector } from "reselect";

const categoriesReducer = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [categoriesReducer],
  (categories) =>
    categories.categoriesMap.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
