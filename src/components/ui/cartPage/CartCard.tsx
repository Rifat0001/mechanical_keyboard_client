import { NavLink } from "react-router-dom";
import { TCartInitialState } from "../../../types";
import EmptyCard from "./EmptyCard";

type TCartCardProps = {
  cart: TCartInitialState;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleRemoveFromCart: (id: string) => void;
  totalPrice: () => number;
};

const CartCard = ({
  cart,
  handleUpdateQuantity,
  handleRemoveFromCart,
  totalPrice,
}: TCartCardProps) => {
  return (
    <>
      <div className="my-4">
        {!(cart.items.length === 0) ? (
          <h2 className="text-3xl font-bold text-center mb-8">Cart <span className="text-violet-500" >Page</span> </h2>
        ) : (
          ""
        )}
        {cart.items.length === 0 ? (
          <EmptyCard></EmptyCard>
        ) : (
          <div className="lg:mx-16 mx-4">
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-4">
                <thead>
                  <tr>
                    <th className="px-4 text-violet-500 py-2">Product Name</th>
                    <th className="px-4 text-violet-500 py-2">Price</th>
                    <th className="px-4 text-violet-500 py-2">Quantity</th>
                    <th className="px-4 text-violet-500 py-2">Total</th>
                    <th className="px-4 text-violet-500 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item) => (
                    <tr key={item._id}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex items-center justify-center">
                          <button
                            className="btn bg-violet-500 hover:bg-violet-600 text-white btn-xs"
                            onClick={() =>
                              handleUpdateQuantity(item._id!, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-secondary bg-violet-500 hover:bg-violet-600 text-white btn-xs border-none"
                            onClick={() =>
                              handleUpdateQuantity(item._id!, item.quantity + 1)
                            }
                            disabled={item.quantity >= 10}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="border flex justify-center items-center px-4 py-2">
                        <button
                          className="btn  btn-ghost btn-xs"
                          onClick={() => handleRemoveFromCart(item._id!)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-7">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl text-violet-500 font-bold mb-2 sm:mb-0">
                Total: ${totalPrice().toFixed(2)}
              </h2>
              <NavLink to="/product/checkout">
                <button className="btn bg-violet-500 hover:bg-violet-600 text-white ">Proceed to Checkout</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartCard;
