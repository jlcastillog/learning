/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export  const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);
  const showProductDetail = () => setIsProductDetailVisible(true)
  const hideProductDetail = () => setIsProductDetailVisible(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        showProductDetail,
        hideProductDetail,
        isProductDetailVisible
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};


export default ShoppingCartContext;