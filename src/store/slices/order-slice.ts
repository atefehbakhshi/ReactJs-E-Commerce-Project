import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderProduct: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addOrderProduct } = orderSlice.actions;

export default orderSlice.reducer;
