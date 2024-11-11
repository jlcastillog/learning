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
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Prime Products</h1>
        </div>
        <input
          className="border border-black rounded-lg w-80 p-2 mb-4"
          type="text"
          placeholder="Search a product"
          onChange={(event) => {context.setsearchByTitle(event.target.value)}}
        />
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
