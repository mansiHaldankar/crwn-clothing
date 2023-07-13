import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
// import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchCategoriesStart,
  // setCategoriesMap,
} from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoriesMap = await getCategoriesAndDocument();
    //   dispatch(setCategoriesMap(categoriesMap));
    // };
    // getCategoriesMap();

    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
