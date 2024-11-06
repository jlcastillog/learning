/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Products counter in cart
  const [count, setCount] = useState(0);

  // Product detail
  const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);
  const showProductDetail = () => setIsProductDetailVisible(true);
  const hideProductDetail = () => setIsProductDetailVisible(false);

  // My order detail
  const [isMyOrderDetailVisible, setIsMyOrderDetailVisible] = useState(false);
  const showMyOrderDetail = () => setIsMyOrderDetailVisible(true);
  const hideMyOrderDetail = () => setIsMyOrderDetailVisible(false);

  // Selected product
  const [selectedProduct, setSelectedProduct] = useState({});

  // Cart products
  const [cartProducts, setCartProducts] = useState([]);

  // Order
  const [order, setOrder] = useState([]);

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
        isMyOrderDetailVisible,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
