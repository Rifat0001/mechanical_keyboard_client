import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartInitialState } from "../../../types";

const initialState: TCartInitialState = {
  items: [],
};
type TProduct = {
  image: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  _id?: string;
};

// here redux persis is used for store the data in localStorage
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        if (existingProduct.quantity < action.payload.quantity) {
          existingProduct.quantity += 1;
        }
      } else {
        // Check localStorage for existing items before adding a new one
        const storedCart = localStorage.getItem('cart'); // Or use appropriate storage method
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];
        const existingItemInStorage = parsedCart.find(
          (item: TProduct) => item._id === action.payload._id
        );

        if (existingItemInStorage) {
          state.items.push({
            ...action.payload,
            quantity: existingItemInStorage.quantity,
          });
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const isItemExists = state.items.find(
        (item) => item._id === action.payload.id
      );
      console.log(isItemExists);
      if (isItemExists) {
        isItemExists.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
