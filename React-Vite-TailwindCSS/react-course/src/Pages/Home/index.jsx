import { useContext } from "react";
import ShoppingCartContext from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.products?.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
    </>
  );
}

export default Home;
