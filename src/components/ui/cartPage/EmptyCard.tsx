import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const EmptyCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
      <Fade delay={1e2} cascade damping={1e-1}>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            No Product Added
          </h1>
          <p className="text-gray-700 mb-6">
            First add your product from product page
          </p>
          <div className="flex justify-center">
            <NavLink to="/product">
              <button className="btn bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600 transition duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
};

export default EmptyCard;
