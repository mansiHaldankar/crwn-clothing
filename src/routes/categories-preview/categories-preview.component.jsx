import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../context/categories.context';
import { useSelector } from 'react-redux';
import { categoriesMapSelect } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(categoriesMapSelect);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;