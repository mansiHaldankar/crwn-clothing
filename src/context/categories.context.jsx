import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";
import { SHOP_DATA } from "../shop-data.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
    // setProducts: () => null
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap ] = useState({});
    // useEffect(() => {
    //     console.log(SHOP_DATA)
    //       addCollectionAndDocuments('categories', SHOP_DATA);
    //     }, []);

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoriesMap = await getCategoriesAndDocument();
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    }, [])
    const value = {categoriesMap}
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}