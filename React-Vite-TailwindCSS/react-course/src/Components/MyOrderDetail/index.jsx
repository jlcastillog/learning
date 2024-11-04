import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartContext from "../../Context";
import "./styles.css";

const MyOrderDetail = () => {
  const context = useContext(ShoppingCartContext);
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
        </aside>
      )}
    </>
  );
};

export default MyOrderDetail;
