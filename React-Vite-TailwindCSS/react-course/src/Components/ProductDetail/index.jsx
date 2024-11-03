import { XCircleIcon } from "@heroicons/react/24/outline";
import "./styles.css";

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <XCircleIcon className="size-7" />
      </div>
    </aside>
  );
};

export default ProductDetail;
