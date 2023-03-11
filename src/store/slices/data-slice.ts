import { createSlice } from "@reduxjs/toolkit";
import { ALL_PRODUCTS_PER_PAGE, ORDERS_PER_PAGE } from "../../constants";
import { getAllProducts, getOrdersList } from "../actions/data-actions";

const initialState = {
  ordersdata: {
    list: [],
    count: 0,
    dataPerPage: ORDERS_PER_PAGE,
    status: "idle",
  },
  allProducts: {
    list: [],
    count: 0,
    page: 1,
    productCategory: "all",
    dataPerPage: ALL_PRODUCTS_PER_PAGE,
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
    [getAllProducts.pending]: (state) => {
      state.allProducts.status = "pending";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.allProducts.list = action.payload.data;
      state.allProducts.count = action.payload.count;
      state.allProducts.page = action.payload.page;
      state.allProducts.productCategory = action.payload.productCategory;
      state.allProducts.status = "success";
    },
  },
});

export default dataSlice.reducer;
