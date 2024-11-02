const URL_API = "https://api.escuelajs.co/api/v1/products";

const getProducts = (setProducts) => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => setProducts(data));
}

export default getProducts;