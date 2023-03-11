import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data-slice";
import modalSlice from "./slices/modal-slice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
  },
});

export default store;
