import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CartItemsSlice from "./slices/CartItemsSlice";

// export const store = configureStore({
//   reducer: {
//     cart: CartSlice,
//   },
// });

export const store = configureStore({
  reducer: {
    cart: CartItemsSlice,
  },
});
