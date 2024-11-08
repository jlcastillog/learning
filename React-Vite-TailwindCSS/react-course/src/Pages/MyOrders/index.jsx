import { useContext } from "react";
import ShoppingCartContext from "../../Context";
import { Layout } from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <div className="flex item-center justify-center relative w-80">
          <h1>MyOrders</h1>
        </div>

        {context.order.map((order) => {
          return (
            <Link key={order.id} to={`/my-orders/${order.id}`}>
              <OrdersCard
                key={order.id}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export default MyOrders;
