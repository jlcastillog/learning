import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartContext from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../Utils";
import "./styles.css";

const MyOrderDetail = () => {
  const context = useContext(ShoppingCartContext);

  const handleDeleteProduct = (id) => {
    const filtersProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filtersProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.2024",
      product: context.cartProducts,
      totalProducts: context.cartProducts.lenght,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);

    context.setCartProducts([])
  };

  return (
    <>
      {context.isMyOrderDetailVisible && (
        <aside className="order-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
          <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-xl">My Order</h2>
            <XMarkIcon
              onClick={() => {
                context.hideMyOrderDetail();
              }}
              className="size-6 cursor-pointer"
            />
          </div>
          <div className="px-6 overflow-y-auto flex-1">
            {context.cartProducts.map((product) => {
              return (
                <OrderCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images[0]}
                  price={product.price}
                  handleDelete={handleDeleteProduct}
                />
              );
            })}
          </div>
          <div className="px-6 mb-6">
            <p className="flex justify-between items-center mb-2">
              <span className="font-light">Total</span>
              <span className="font-medium text-2xl">
                ${totalPrice(context.cartProducts)}
              </span>
            </p>
            <button className="w-full py-3 bg-black text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
          </div>
        </aside>
      )}
    </>
  );
};

export default MyOrderDetail;
