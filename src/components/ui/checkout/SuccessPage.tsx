import { NavLink } from "react-router-dom";

const SuccessPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-violet-500 mb-4">
            Order Placed!
          </h1>
          <p className="text-gray-700 mb-6"> Order Checkout is completed Successfully!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <NavLink to="/">
              <button className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600 transition duration-300">
                Return Home
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
