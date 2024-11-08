import { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartContext from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Layout } from "../../Components/Layout";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let indexOrder = currentPath?.split("/")?.slice(-1)[0];

  if (indexOrder === 'last'){
    indexOrder = context.order?.length - 1;
  }

  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className="size-6 cursor-pointer" />
          </Link>
          <h1>MyOrders</h1>
        </div>
        <div className="flex flex-col w-80">
          {context.order?.[indexOrder]?.products?.map((product) => {
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

export default MyOrder;
