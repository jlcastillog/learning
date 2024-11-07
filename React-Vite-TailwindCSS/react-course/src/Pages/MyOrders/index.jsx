import { useContext } from "react";
import ShoppingCartContext from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Layout } from "../../Components/Layout";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        MyOrders
        <div className="flex flex-col w-80">
          {context.order?.slice(-1)[0]?.products?.map((product) => {
            return (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images[0]}
                price={product.price}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default MyOrders;
