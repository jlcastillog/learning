/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export  const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0);

  const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);
  const showProductDetail = () => setIsProductDetailVisible(true)
  const hideProductDetail = () => setIsProductDetailVisible(false)

  const [isMyOrderDetailVisible, setIsMyOrderDetailVisible] = useState(false);
  const showMyOrderDetail = () => setIsMyOrderDetailVisible(true)
  const hideMyOrderDetail = () => setIsMyOrderDetailVisible(false)

  const [selectedProduct, setSelectedProduct] = useState({})

  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        showProductDetail,
        hideProductDetail,
        isProductDetailVisible,
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
        showMyOrderDetail,
        hideMyOrderDetail,
        isMyOrderDetailVisible
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};


export default ShoppingCartContext;