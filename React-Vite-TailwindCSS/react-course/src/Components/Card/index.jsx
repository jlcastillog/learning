import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import ShoppingCartContext from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.hideMyOrderDetail();
    context.showProductDetail();
    context.setSelectedProduct(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.hideProductDetail();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.showMyOrderDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    return isInCart ? (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 font-med">
        <CheckIcon className="h-6 w-6 text-white"/>
      </div>
    ) : (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 font-med"
        onClick={(event) => addProductsToCart(event, data.data)}
      >
        <PlusIcon className="h-6 w-6 text-black"/>
      </div>
    );
  };

  return (
    <div
      onClick={() => {
        showProduct(data.data);
      }}
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 font-med">
          {data.data?.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data?.images[0]}
          alt="Product image"
        />
        {renderIcon(data.data?.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data?.title}</span>
        <span className="text-lg font-med">${data.data?.price}</span>
      </p>
    </div>
  );
};

export default Card;
