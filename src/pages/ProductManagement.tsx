import { TProduct } from "../types";
import { NavLink } from "react-router-dom";
import ProgressBar from "../components/ui/ProgressBar";
import ErrorPage from "../components/ui/ErrorPage";
import Swal from "sweetalert2";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/features/product/productApi";
import { Fade, Slide } from "react-awesome-reveal";

const ProductManagement = () => {
  const { data: products, isLoading, error } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }
  if (error) {
    return <ErrorPage></ErrorPage>;
  }
  //handle delete
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Do you want to delete the product?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Saved!", "", "success");
      } else {

      }
    });
  };

  return (
    <>
      <div className="lg:mx-16 mx-0 overflow-hidden  my-4">
        <Slide>
          <h2 className="text-3xl font-bold text-center mb-8">Product <span className="text-violet-500" >Management</span> </h2></Slide>
        <Fade delay={1e2} cascade damping={1e-1}>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="py-2 text-lg text-violet-500 px-4 border-b">Name</th>
                <th className="py-2 text-lg text-violet-500 px-4 border-b">Price</th>
                <th className="py-2 text-lg text-violet-500 px-4 border-b">Category</th>
                <th className="py-2 text-lg text-violet-500 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              {products?.data?.map((product: TProduct, index: number) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td className="font-semibold">{product?.name}</td>
                  <td className="font-semibold">{product.price} $</td>
                  <td className="font-semibold">{product.brand}</td>
                  <td className="py-2 px-4 border-b space-y-2">
                    <NavLink to={`/product/product-update/${product._id}`}>
                      <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                      </button>
                    </NavLink>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded"
                      onClick={() => handleDelete(product._id!)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>

                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4">
            <NavLink to="/product/product-create">
              <button className="btn bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded mb-4">
                Create New Product
              </button>
            </NavLink>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default ProductManagement;
