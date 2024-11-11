/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import getProducts from "../Services/productService.js";

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

  // Get products
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  // Get products by title
  const [searchByTitle, setsearchByTitle] = useState(null);

  // Get filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);

  const filterdItemsBytTitle = (products, filterByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(filterByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredProducts(filterdItemsBytTitle(products, searchByTitle));
    }
  }, [products, searchByTitle]);

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
        products,
        setProducts,
        searchByTitle,
        setsearchByTitle,
        filteredProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
