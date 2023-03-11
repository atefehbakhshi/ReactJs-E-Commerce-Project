import { createSlice } from "@reduxjs/toolkit";
import { ORDERS_PER_PAGE } from "../../constants";
import { getOrdersList } from "../actions/data-actions";

const initialState = {
  ordersdata: {
    list: [],
    count: 0,
    dataPerPage: ORDERS_PER_PAGE,
    status: "idle",
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrdersList.pending]: (state) => {
      state.ordersdata.status = "pending";
    },
    [getOrdersList.fulfilled]: (state, action) => {
      state.ordersdata.list = action.payload.data;
      state.ordersdata.count = action.payload.count;
      state.ordersdata.status = "success";
    },
  },
});

export default dataSlice.reducer;
