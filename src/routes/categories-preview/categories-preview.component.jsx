// import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../context/categories.context";
import { useSelector } from "react-redux";
import {
  isCategoriesLoadingSelector,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap) || [];

  const isCategoriesLoading = useSelector(isCategoriesLoadingSelector);

  // console.log(categoriesMap);

  return (
    <>
      {(isCategoriesLoading && <div>Loading....</div>) ||
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </>
  );
};

export default CategoriesPreview;
