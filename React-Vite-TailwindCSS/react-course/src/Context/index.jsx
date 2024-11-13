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
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);

  const filterdItemsBytTitle = (products, filterByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(filterByTitle.toLowerCase())
    );
  };

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  const filterdItemsByCategory = (products, filterByCategory) => {
    return products?.filter((product) =>
      product.category.name
        .toLowerCase()
        .includes(filterByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    const filterBy = (
      searchType,
      products,
      searchByTitle,
      searchByCategory
    ) => {

      console.log("searchType: ", searchType)
      console.log("Category: ", searchByCategory)
      console.log("Title: ", searchByTitle)
      
      if (searchType === "BY_TITLE") {
        return filterdItemsBytTitle(products, searchByTitle);
      }

      if (searchType === "BY_CATEGORY") {
        return filterdItemsByCategory(products, searchByCategory);
      }

      if (searchType === "BY_TITLE_AND_CATEGORY") {
        return filterdItemsBytTitle(
          filterdItemsByCategory(products, searchByCategory),
          searchByTitle
        );
      }

      if (!searchType) {
        return products;
      }
    };

    if (searchByTitle && searchByCategory) {
      setFilteredProducts(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredProducts(
        filterBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredProducts(
        filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredProducts(
        filterBy(null, products, searchByTitle, searchByCategory)
      );
    }
  }, [products, searchByTitle, searchByCategory]);

  console.log("filteredProducts: ", filteredProducts)

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
        setSearchByTitle,
        filteredProducts,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
