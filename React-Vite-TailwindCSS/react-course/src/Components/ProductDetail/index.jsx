import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartContext from "../../Context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      {context.isProductDetailVisible && (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
          <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-xl">Detail</h2>
            <XMarkIcon
              onClick={() => {
                context.hideProductDetail();
              }}
              className="size-6 cursor-pointer"
            />
          </div>
          <figure className="px-6">
            <img
              className="w-full h-full rounded-lg"
              src={context.selectedProduct.images[0]}
              alt={context.selectedProduct.title}
            />
          </figure>
          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">
              ${context.selectedProduct.price}
            </span>
            <span className="font-medium text-md">
              {context.selectedProduct.title}
            </span>
            <span className="font-light text-md">
              {context.selectedProduct.description}
            </span>
          </p>
        </aside>
      )}
    </>
  );
};

export default ProductDetail;
