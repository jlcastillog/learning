import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import getProducts from '../../Services/productService.js'
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts(setProducts)
  }, []);

  return (
    <>
      <Layout>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {products?.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
    </>
  );
}

export default Home;
