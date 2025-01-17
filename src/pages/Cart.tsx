import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import {
  removeFromCart,
  updateCartQuantity,
} from "../redux/features/cart/cartSlice";
import CartCard from "../components/ui/cartPage/CartCard";
import Swal from "sweetalert2";

const Cart = () => {
  //grab cart data from local state
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  // calculate total price
  const totalPrice = () => {
    return cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };
  // handle remove from cart
  const handleRemoveFromCart = (id: string) => {
    Swal.fire({
      title: "Do you want to delete the product?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire("Saved!", "", "success");
      } else {
        
      }
    });
  };
  //handle update quantity
  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };
  return (
    <CartCard
      cart={cart}
      handleUpdateQuantity={handleUpdateQuantity}
      handleRemoveFromCart={handleRemoveFromCart}
      totalPrice={totalPrice}
    ></CartCard>
  );
};

export default Cart;
