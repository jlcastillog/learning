import { useContext } from "react";
import ShoppingCartContext from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);

  const isSignOut = context.isSignOut;
  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Prime Products</h1>
        </div>
        {!isSignOut && (
          <>
            <input
              className="border border-black rounded-lg w-80 p-2 mb-4"
              type="text"
              placeholder="Search a product"
              onChange={(event) => {
                context.setSearchByTitle(event.target.value);
              }}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
              {context.filteredProducts?.length > 0 &&
                context.filteredProducts?.map((product) => (
                  <Card key={product.id} data={product} />
                ))}
            </div>
            <ProductDetail></ProductDetail>
          </>
        )}
      </Layout>
    </>
  );
}

export default Home;
