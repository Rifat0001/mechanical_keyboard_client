import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { TProduct } from "../../../types";
import Rating from "react-rating";

type TProductDetailsProps = {
  product: TProduct;
  handleAddToCart: () => Promise<void>;
};

const ProductDetailsCard = ({
  product,
  handleAddToCart,
}: TProductDetailsProps) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col p-8 lg:p-16 gap-8 bg-base-100 ">
        <div className="w-full">
          <img
            className="w-full rounded-lg md:h-96"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold mb-4">{product?.name}</h3>
          <h3 className="text-lg mb-2"><span className="font-bold">Brand</span> : {product?.brand}</h3>
          <h5 className="text-lg mb-2"><span className="font-bold">Available Quantity: </span>
             {product?.quantity}
          </h5>
          <h5 className="text-lg mb-2"><span className="font-bold">Price: </span>${product?.price}</h5>

          <div className="flex gap-1 items-center ">
            <h5 className="text-lg mb-2"><span className="font-bold">Rating: </span></h5>
            {/* @ts-expect-error: Type issue with Rating component */}
            <Rating
              className="text-yellow-500"
              initialRating={product?.rating}
              emptySymbol={<IoMdStarOutline className="text-2xl" />}
              fullSymbol={<IoMdStar className="text-2xl" />}
              fractions={2}
              readonly
            />
          </div>
          <h5 className="text-lg mb-2"><span className="font-bold">Description: </span>{product?.description}</h5>

          <div className="card-actions">
            <button
              className={`btn bg-violet-500 hover:bg-violet-600 text-white ${
                !product.quantity ? "btn-disabled" : "btn-primary"
              }`}
              onClick={handleAddToCart}
              disabled={product.quantity === 0}
            >
              {!product.quantity ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
