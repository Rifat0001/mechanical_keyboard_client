import Rating from "react-rating";
import { TProduct } from "../../../../types";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

type TFeaturedCardProps = {
  products: TProduct[];
  handleSeeDetails: (id: string) => void;
};

const FeaturedProductCard = ({
  products,
  handleSeeDetails,
}: TFeaturedCardProps) => {
  return (
    <section className="my-16">
      <Slide>
        <h2 className="text-3xl font-bold text-center mb-8">Feature <span className="text-violet-500" >Products</span> </h2></Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.slice(0, 6).map((product: TProduct) => (
          <div key={product._id} className="border shadow-md p-4 rounded-lg">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-4">{product?.name}</h3>
            <h3 className="text-lg mb-2">Brand : {product?.brand}</h3>
            <p className="text-lg mb-2">
              Available Quantity: {product?.quantity}
            </p>
            <p className="text-lg mb-2">Price: ${product?.price}</p>

            <div className="flex gap-1 items-center ">
              <p className="text-lg mb-2">Rating: </p>
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

            <button
              onClick={() => handleSeeDetails(product?._id)}
              className="btn bg-white border font-bold border-violet-500 btn-outline text-violet-500 hover:bg-violet-600 mt-4 mb-2"
            >
              See Details
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
      <NavLink to='/product' ><button className="btn bg-violet-500 lg:px-8 lg:text-lg hover:bg-violet-600 border-none text-white mt-12">
        See More
      </button></NavLink>
      </div>
    </section>
  );
};

export default FeaturedProductCard;
