import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category-slice";
import commentSlice from "./slices/comment-slice";
import dataSlice from "./slices/data-slice";
import modalSlice from "./slices/modal-slice";
import orderSlice from "./slices/order-slice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    category: categorySlice,
    order: orderSlice,
    comments:commentSlice
  },
});

export default store;
