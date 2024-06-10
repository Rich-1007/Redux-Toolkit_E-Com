import { createSlice } from "@reduxjs/toolkit";

export const CartItemsSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    removeAll: (state, action) => {
      return state = [];
    },
  },
});

export const { add, remove, removeAll } = CartItemsSlice.actions;
export default CartItemsSlice.reducer;
