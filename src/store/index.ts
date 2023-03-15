import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data-slice";
import modalSlice from "./slices/modal-slice";
import orderSlice from "./slices/order-slice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    order: orderSlice,
  },
});

export default store;
